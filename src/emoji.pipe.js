import { Pipe } from '@angular/core';
import emoji from 'emojione';
var EmojiPipe = (function () {
    function EmojiPipe() {
    }
    EmojiPipe.prototype.transform = function (text) {
        return emoji.shortnameToImage(text || '');
    };
    return EmojiPipe;
}());
export { EmojiPipe };
EmojiPipe.decorators = [
    { type: Pipe, args: [{ name: 'emoji' },] },
];
/** @nocollapse */
EmojiPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=emoji.pipe.js.map