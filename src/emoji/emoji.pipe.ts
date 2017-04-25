import { Pipe, PipeTransform } from '@angular/core';
import * as emoji from 'emojione';

@Pipe({name: 'emoji'})
export class EmojiPipe implements PipeTransform {
  transform(text: String): HTMLElement {
    return emoji.shortnameToImage(text || '');
  }
}
