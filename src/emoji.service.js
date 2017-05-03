"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var EmojiService = (function () {
    function EmojiService(http) {
        this.http = http;
    }
    EmojiService.prototype.getEmojiConfig = function () {
        //todo
        return this.http.request('./node_modules/emojione/emoji.json')
            .map(function (res) { return res.json(); });
    };
    EmojiService.prototype.getCategoriesConfig = function () {
        //todo
        return this.http.request('./node_modules/emojione/categories.json')
            .map(function (res) { return res.json(); });
    };
    return EmojiService;
}());
EmojiService = __decorate([
    core_1.Injectable()
], EmojiService);
exports.EmojiService = EmojiService;
