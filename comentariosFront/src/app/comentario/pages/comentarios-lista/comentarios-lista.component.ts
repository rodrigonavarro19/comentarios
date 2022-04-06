import { Component, OnInit } from '@angular/core';
import { ComentarioApiService } from '../../services/comentario-api.service';
import { Comentario } from '../../interfaces/comentario.interface';
import { Region } from '../../interfaces/region.interface';
import {ConfirmationService, MessageService} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios-lista',
  templateUrl: './comentarios-lista.component.html',
  styleUrls: ['./comentarios-lista.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class ComentariosListaComponent implements OnInit {

  dialog:       boolean = false; 
  regiones:     Region[] = [];
  comentarios:  Comentario[] = [];
  loanding:     boolean = true;

  miFormulario : FormGroup =  this.fb.group({
    id: [],
    comentario: [ '',[Validators.required]],
    email: ['', [Validators.required, Validators.email ]],
    region: [ ,[Validators.required]],
  });
  

  constructor(private comentarioApiService:ComentarioApiService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    //Obtener Regiones
    this.comentarioApiService.getRegiones()
      .subscribe(regiones => { 
        this.regiones = regiones.sort( (a,b)=>{
          if(a.orden> b.orden){
            return 1;
          }
          if(a.orden < b.orden){
            return -1;
          }
          return 0;
        });
         
      });

      this.obtenerComentarios();
      
  }
  obtenerComentarios(){
    this.loanding = true;
    this.comentarioApiService.getComentarios()
        .subscribe(comentarios => {
          this.comentarios = comentarios;
          this.loanding = false;
        });
  }

  editar(comentario: Comentario){
    this.miFormulario.controls['id'].setValue(comentario.id);
    this.miFormulario.controls['comentario'].setValue(comentario.comentario);
    this.miFormulario.controls['email'].setValue(comentario.email);
    this.miFormulario.controls['region'].setValue(comentario.region.id);
    this.dialog = true;
  }

  nuevo(){
    this.miFormulario.reset();
    this.dialog = true;
  }
  
  eliminar(comentario: Comentario){
    

      this.confirmationService.confirm({
        message: '¿Está segura(o) que desea eliminar el comentario "' + comentario.comentario + '"?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            
          this.loanding = true;
            this.comentarioApiService.deleteComentario(comentario.id)
            .subscribe(resp => {
              this.loanding = false;
              if(resp.estado){
                this.comentarios = this.comentarios.filter(val => val.id !== comentario.id);
                this.messageService.add({severity:'success', summary: 'Operación exitosa', detail: resp.mensaje, life: 3000});
              }else{
                this.messageService.add({severity:'error', summary: 'Error', detail: resp.mensaje, life: 3000});
              }
            });

        }
    });

  }
  

  ocultarDialog(){
    this.dialog = false;
  }

  campoNoValido( campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submit(){
    const formValue = {...this.miFormulario.value}
    const comentarioRequest: Comentario = {
      id: formValue.id,
      comentario: formValue.comentario,
      region: {id: formValue.region, nombre:'', orden: 0},
      email: formValue.email,
    };
    
    this.ocultarDialog();
    this.loanding = true;

    if(formValue.id){ //Update Comentario
      this.comentarioApiService.putComentario( formValue.id, comentarioRequest)
       .subscribe(resp =>{
        console.log(resp);
         this.loanding = false;

         if(resp.estado){
          this.comentarios[this.findIndexById(formValue.id)] = resp.comentario!;
          this.messageService.add({severity:'success', summary: 'Operación exitosa', detail: resp.mensaje , life: 3000});
         }else{
          this.messageService.add({severity:'error', summary: 'Error', detail: resp.mensaje , life: 3000});
         }
       });

    }else{ // Nuevo Comentario
      this.comentarioApiService.postComentario(comentarioRequest)
        .subscribe(resp => {
         console.log(resp);
         
          this.loanding = false;

          if(resp.estado){
            this.messageService.add({severity:'success', summary: 'Operación exitosa', detail: resp.mensaje, life: 3000});
            this.comentarios.push(resp.comentario!)
            
          }else{
            this.messageService.add({severity:'error', summary: 'Error', detail: resp.mensaje, life: 3000});
            this.comentarios.push(resp.comentario!)
            
          }
        });

    } 
    
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.comentarios.length; i++) {
        if (this.comentarios[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
  }


}
