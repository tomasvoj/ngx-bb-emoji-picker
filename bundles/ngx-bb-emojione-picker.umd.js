(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material'), require('@angular/http'), require('rxjs/Rx'), require('rxjs/add/operator/map'), require('rxjs/add/operator/toPromise'), require('rxjs/add/operator/catch'), require('underscore'), require('emojione')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/material', '@angular/http', 'rxjs/Rx', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/catch', 'underscore', 'emojione'], factory) :
	(factory((global.ngx = global.ngx || {}, global.ngx.bb = global.ngx.bb || {}, global.ngx.bb.emojione = global.ngx.bb.emojione || {}, global.ngx.bb.emojione.picker = global.ngx.bb.emojione.picker || {}),global.ng.core,global.ng.common,global.ng.material,global.ng.http,null,null,null,null,global._,global._emojione));
}(this, (function (exports,_angular_core,_angular_common,_angular_material,_angular_http,rxjs_Rx,rxjs_add_operator_map,rxjs_add_operator_toPromise,rxjs_add_operator_catch,_,emoji) { 'use strict';

_ = 'default' in _ ? _['default'] : _;
emoji = 'default' in emoji ? emoji['default'] : emoji;

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
EmojiService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
EmojiService.ctorParameters = function () { return [
    { type: _angular_http.Http, },
]; };

var EmojiComponent = (function () {
    function EmojiComponent(emojiService) {
        var _this = this;
        this.emojiService = emojiService;
        this.onSelect = new _angular_core.EventEmitter();
        this.categories = [];
        this.config = emojiService.getEmojiConfig().subscribe(function (config) {
            console.log(config);
            for (var id in config) {
                if (_this.categories.indexOf(config[id].category) === -1) {
                    _this.categories.push(config[id].category);
                }
            }
            
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
    { type: _angular_core.Component, args: [{
                selector: 'app-ngx-bb-emoji-picker',
                templateUrl: 'emoji.component.html',
                styleUrls: ['emoji.component.scss']
            },] },
];
/** @nocollapse */
EmojiComponent.ctorParameters = function () { return [
    { type: EmojiService, },
]; };
EmojiComponent.propDecorators = {
    'selected': [{ type: _angular_core.Input },],
    'onSelect': [{ type: _angular_core.Output },],
};

var EmojiPipe = (function () {
    function EmojiPipe() {
    }
    EmojiPipe.prototype.transform = function (text) {
        return emoji.shortnameToImage(text || '');
    };
    return EmojiPipe;
}());
EmojiPipe.decorators = [
    { type: _angular_core.Pipe, args: [{ name: 'emoji' },] },
];
/** @nocollapse */
EmojiPipe.ctorParameters = function () { return []; };

var EmojiModule = (function () {
    function EmojiModule() {
    }
    return EmojiModule;
}());
EmojiModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [
                    EmojiComponent,
                    EmojiPipe
                ],
                imports: [
                    _angular_common.CommonModule,
                    _angular_material.MdButtonModule, _angular_material.MdCheckboxModule, _angular_material.MdTabsModule, _angular_material.MdInputModule
                ],
                exports: [EmojiComponent, EmojiPipe],
                providers: [EmojiService]
            },] },
];
/** @nocollapse */
EmojiModule.ctorParameters = function () { return []; };

exports.EmojiModule = EmojiModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
