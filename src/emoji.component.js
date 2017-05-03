import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmojiService } from './emoji.service';
import _ from 'underscore';
var EmojiComponent = (function () {
    function EmojiComponent(emojiService) {
        var _this = this;
        this.emojiService = emojiService;
        this.onSelect = new EventEmitter();
        this.categories = [];
        this.config = emojiService.getEmojiConfig().subscribe(function (config) {
            console.log(config);
            for (var id in config) {
                if (_this.categories.indexOf(config[id].category) === -1) {
                    _this.categories.push(config[id].category);
                }
            }
            ;
            var items = [];
            _(config).each(function (elem, key) {
                elem.key = elem.shortname.replace(/:/g, '');
                //elem.url = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/64/' + elem.code_points.base + '.png';
                items.push(elem);
            });
            _this.emojis = _.groupBy(items, function (item) { return item.category; });
        });
    }
    EmojiComponent.prototype.getCategoryIconPath = function (category) {
        return "./node_modules/emojione/extras/category_icons/" + category + ".svg";
    };
    EmojiComponent.prototype.select = function (shortname) {
        this.onSelect.emit(shortname);
    };
    return EmojiComponent;
}());
export { EmojiComponent };
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
EmojiComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ngx-bb-emoji-picker',
                template: "\n    <md-tab-group>\n        <md-tab *ngFor='let category of categories'>\n            <ng-template md-tab-label>\n                {{category}}\n            </ng-template>\n            <span *ngFor=\"let item of emojis[category]; let i=index\" (click)=\"select(item.shortname)\" [ngClass]=\"'e1a-sm e1a-' + item.key\">\n            </span>\n        </md-tab>\n    </md-tab-group>\n  "
            },] },
];
/** @nocollapse */
EmojiComponent.ctorParameters = function () { return [
    { type: EmojiService, },
]; };
EmojiComponent.propDecorators = {
    'selected': [{ type: Input },],
    'onSelect': [{ type: Output },],
};
//# sourceMappingURL=emoji.component.js.map