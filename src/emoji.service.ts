import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmojiService {
  constructor(private http:Http) {
  }

  getEmojiConfig() {
    //todo
    return this.http.request('./node_modules/emojione/emoji.json')
      .map(res => res.json());
  }

  getCategoriesConfig() {
    //todo
    return this.http.request('./node_modules/emojione/categories.json')
      .map(res => res.json());
  }
}
