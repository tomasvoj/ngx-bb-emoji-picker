import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmojiService } from '../emoji/emoji.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-ngx-bb-emoji-picker',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent {
  @Input()  selected;
  @Output() onSelect = new EventEmitter<string>();

  config;
  categories = [];
  emojis;

  constructor(private emojiService: EmojiService) {
    this.config = emojiService.getEmojiConfig().subscribe((config) => {
      console.log(config);
      for (var id in config) {
        if (this.categories.indexOf(config[id].category) === -1) {
          this.categories.push(config[id].category);
        }
      };
      let items = [];
      _(config).each(function(elem, key){
        elem.url = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/64/' + elem.code_points.base + '.png';
        items.push(elem);
      });
      this.emojis = _.groupBy(items, function(item){ return item.category; });
    });
  }

  getCategoryIconPath(category){
    return "./node_modules/emojione/extras/category_icons/" + category + ".svg";
  }

  select(shortname: string) {
    this.onSelect.emit(shortname);
  }
/*  ngOnInit(private emojiService: EmojiService) {
    this.config = emojiService.getConfig().subscribe((config) => {
      console.log(config);
      for (var id in config) {
        debugger
        if (this.categories.indexOf(this.config[id].category) === -1) {
          this.categories.push(this.config[id].category);
        }
      };
    });
  }*/
}
