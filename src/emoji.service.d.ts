import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
export declare class EmojiService {
    private http;
    constructor(http: Http);
    getEmojiConfig(): Observable<any>;
    getCategoriesConfig(): Observable<any>;
}
