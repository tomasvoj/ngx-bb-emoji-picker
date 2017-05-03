"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var emoji_component_1 = require("./emoji.component");
var emoji_service_1 = require("./emoji.service");
var emoji_pipe_1 = require("./emoji.pipe");
var EmojiModule = (function () {
    function EmojiModule() {
    }
    return EmojiModule;
}());
EmojiModule = __decorate([
    core_1.NgModule({
        declarations: [
            emoji_component_1.EmojiComponent,
            emoji_pipe_1.EmojiPipe
        ],
        imports: [
            common_1.CommonModule,
            material_1.MdButtonModule, material_1.MdCheckboxModule, material_1.MdTabsModule, material_1.MdInputModule
        ],
        exports: [emoji_component_1.EmojiComponent, emoji_pipe_1.EmojiPipe],
        providers: [emoji_service_1.EmojiService]
    })
], EmojiModule);
exports.EmojiModule = EmojiModule;
