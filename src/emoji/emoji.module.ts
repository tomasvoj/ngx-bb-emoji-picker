import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {MdButtonModule, MdCheckboxModule, MdTabsModule, MdInputModule} from '@angular/material';

import { EmojiComponent } from './emoji.component';
import { EmojiService } from './emoji.service';
import { EmojiPipe } from './emoji.pipe';

@NgModule({
  declarations: [
    EmojiComponent,
    EmojiPipe
  ],
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule, MdTabsModule, MdInputModule
  ],
  exports: [EmojiComponent, EmojiPipe],
  providers: [EmojiService]
})
export class EmojiModule { }
