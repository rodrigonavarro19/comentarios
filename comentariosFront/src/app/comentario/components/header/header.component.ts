import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('nuevo') nuevo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  nuevoComentario(){
    this.nuevo.emit();
  }

}
