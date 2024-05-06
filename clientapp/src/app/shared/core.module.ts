import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableControlDirective } from './disable-control.directive';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenuModule } from 'primeng/menu';
import { SpeedDialModule } from 'primeng/speeddial';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TagModule } from 'primeng/tag';
import { BlockUIModule } from 'primeng/blockui';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { InputNumberModule } from 'primeng/inputnumber';

import "./extensions";
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    DisableControlDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    DynamicDialogModule,
    PanelModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    CardModule,
    TableModule,
    ToggleButtonModule,
    MenuModule,
    SpeedDialModule,
    ContextMenuModule,
    TagModule,
    BlockUIModule,
    FileUploadModule,
    MessagesModule,
    ToastModule,
    AvatarModule,
    InputNumberModule
  ],
  exports: [
    DisableControlDirective,
    DialogModule,
    DynamicDialogModule,

    PanelModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    CardModule,
    TableModule,
    ToggleButtonModule,
    MenuModule,
    SpeedDialModule,
    ContextMenuModule,
    TagModule,
    BlockUIModule,
    FileUploadModule,
    MessagesModule,
    ToastModule,
    AvatarModule,
    InputNumberModule
  ],
  providers: [ConfirmationService, MessageService, DialogService, DynamicDialogRef, DynamicDialogConfig]
})
export class CoreModule {
}
