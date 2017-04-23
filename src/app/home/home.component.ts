import {Component} from '@angular/core';
import {ContactService} from "../shared/contact.service";
import {Http, RequestOptions, Headers} from "@angular/http";
declare var $;
declare var Email;
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  selectSstar = 0;

  hower = -1;

  showForm = false;

  stars = [0,1,2,3,4,5,6,7,8,9,10];

  json = {
    cid: "1",
    name: "Sumik Vladyslav",
    text: "not a great service"
  };

  showMess = false;

  constructor(private _contactService: ContactService, private http: Http){
  }

  select(star){
    this.selectSstar = star;
    console.log(star)
    if(star >= 8)
      window.location.href = 'http://google.com';
    else{
      // window.location.href='mailto:marco@h4kr.com'
      // window.location.href = 'mailto:shumic1111@meil.ua?subject=subject&body=body';
      this.showForm = true;
    }
  }

  submit(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("https://www.cellmedia.co.il/json_parse.php", this.json, options).subscribe((data) => {
      console.log(data)
    });
    this.showMess = true;
  }


  public message = {name: '', email: '', message: ''};

  onSubmit() {
    this._contactService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response){
    // console.log(`msg is: {response.status}`);

    if(response.status =='success'){
      this.message = {name: '', email: '', message: ''};
      alert('Danke für deine Nachricht');
    }

    if(response.status =='error'){
      alert('Leider konnten wir deine Nachricht nicht versenden. Probier es nochmals oder sende die email direkt. Danke');
    }
  }
}
