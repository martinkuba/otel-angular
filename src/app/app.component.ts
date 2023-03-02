import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-test';

  constructor(private httpClient: HttpClient) {}

  onMakeHttpCall() {
    const url = 'https://httpbin.org/get';

    this.httpClient
      .get('https://httpbin.org/get')
      .subscribe()
  }
}
