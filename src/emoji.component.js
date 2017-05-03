"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var underscore_1 = require("underscore");
var EmojiComponent = (function () {
    function EmojiComponent(emojiService) {
        var _this = this;
        this.emojiService = emojiService;
        this.onSelect = new core_1.EventEmitter();
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
            underscore_1.default(config).each(function (elem, key) {
                elem.key = elem.shortname.replace(/:/g, '');
                //elem.url = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/64/' + elem.code_points.base + '.png';
                items.push(elem);
            });
            _this.emojis = underscore_1.default.groupBy(items, function (item) { return item.category; });
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
__decorate([
    core_1.Input()
], EmojiComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output()
], EmojiComponent.prototype, "onSelect", void 0);
EmojiComponent = __decorate([
    core_1.Component({
        selector: 'app-ngx-bb-emoji-picker',
        template: "\n    <md-tab-group>\n        <md-tab *ngFor='let category of categories'>\n            <ng-template md-tab-label>\n                {{category}}\n            </ng-template>\n            <span *ngFor=\"let item of emojis[category]; let i=index\" (click)=\"select(item.shortname)\" [ngClass]=\"'e1a-sm e1a-' + item.key\">\n            </span>\n        </md-tab>\n    </md-tab-group>\n  "
    })
], EmojiComponent);
exports.EmojiComponent = EmojiComponent;
