import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule} from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule} from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { TableModule } from "primeng/table";
import { ToastModule } from 'primeng/toast';


@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    DialogModule,
    DividerModule,
    InputSwitchModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    TableModule,
    ToastModule,
  ]
})
export class PrimengModule { }
