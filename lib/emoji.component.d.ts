import { EventEmitter } from '@angular/core';
import { EmojiService } from './emoji.service';
export declare class EmojiComponent {
    private emojiService;
    selected: any;
    onSelect: EventEmitter<string>;
    config: any;
    categories: any[];
    emojis: any;
    constructor(emojiService: EmojiService);
    getCategoryIconPath(category: any): string;
    select(shortname: string): void;
}
