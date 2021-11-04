import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
  ] ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
