import {Observable}               from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class ContactService {
  constructor (private _http: Http) {}

  private _contactUrl = 'https://www.cellmedia.co.il/site2/form-to-mail.php?cid=1';

  postEmail(newMail){
    let body = `name=${newMail.name}&email=${newMail.email}&message=${newMail.message}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._contactUrl, body, options)
    //.map(res =>  <string> res.json())
  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error('Error in retrieving news: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
