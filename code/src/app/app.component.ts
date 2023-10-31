import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hot-site-supremo';

  public gotoPage() {
    window.open('https://delivery.yooga.app/supremo',"_blank");
  }
}
