# NgxBbEmojionePicker

WORK IN PROGRESS

1.  copy scss/css style into you project,
2.  add to ngModule
```$javascript
...

import { EmojiModule } from 'ngx-bb-emojione-picker';

@NgModule({
  ...
  imports: [
    ...
    EmojiModule
  ],
  ...
})
export class AppModule { }
```
3.  run 
```
npm i underscore
```
4.  use 
```$html
<app-ngx-bb-emoji-picker></app-ngx-bb-emoji-picker>
```

### Sample

app.component.ts
```$typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value = '';

  constructor(){
  }

  addEmoji(shortname){
    this.value += ' ' + shortname + ' ';
  }
}
```
app.component.html
```$html
<md-input-container>
  <input [ngModel]="value" mdInput placeholder="Favorite food">
</md-input-container>
<app-ngx-bb-emoji-picker (onSelect)="addEmoji($event)"></app-ngx-bb-emoji-picker>
```