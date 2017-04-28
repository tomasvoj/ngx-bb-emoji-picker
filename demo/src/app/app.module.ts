import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { EmojiModule } from '../../../src/emoji/emoji.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdCheckboxModule, MdTabsModule, MdInputModule} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    EmojiModule,
    MdButtonModule, MdCheckboxModule, MdTabsModule, MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
