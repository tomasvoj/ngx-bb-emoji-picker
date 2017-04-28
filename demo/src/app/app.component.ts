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
