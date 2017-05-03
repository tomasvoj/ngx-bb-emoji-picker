import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
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
export { EmojiService };
EmojiService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EmojiService.ctorParameters = function () { return [
    { type: Http, },
]; };
//# sourceMappingURL=emoji.service.js.map