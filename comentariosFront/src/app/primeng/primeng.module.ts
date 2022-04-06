import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule} from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule} from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { TableModule } from "primeng/table";
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ]
})
export class PrimengModule { }
