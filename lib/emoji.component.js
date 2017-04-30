"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const emoji_service_1 = require("./emoji.service");
const underscore_1 = require("underscore");
let EmojiComponent = class EmojiComponent {
    constructor(emojiService) {
        this.emojiService = emojiService;
        this.onSelect = new core_1.EventEmitter();
        this.categories = [];
        this.config = emojiService.getEmojiConfig().subscribe((config) => {
            console.log(config);
            for (var id in config) {
                if (this.categories.indexOf(config[id].category) === -1) {
                    this.categories.push(config[id].category);
                }
            }
            ;
            let items = [];
            underscore_1.default(config).each(function (elem, key) {
                elem.key = elem.shortname.replace(/:/g, '');
                items.push(elem);
            });
            this.emojis = underscore_1.default.groupBy(items, function (item) { return item.category; });
        });
    }
    getCategoryIconPath(category) {
        return "./node_modules/emojione/extras/category_icons/" + category + ".svg";
    }
    select(shortname) {
        this.onSelect.emit(shortname);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EmojiComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmojiComponent.prototype, "onSelect", void 0);
EmojiComponent = __decorate([
    core_1.Component({
        selector: 'app-ngx-bb-emoji-picker',
        templateUrl: './emoji.component.html',
        styleUrls: ['./emoji.component.scss']
    }),
    __metadata("design:paramtypes", [emoji_service_1.EmojiService])
], EmojiComponent);
exports.EmojiComponent = EmojiComponent;
//# sourceMappingURL=emoji.component.js.map