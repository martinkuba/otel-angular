import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { MY_REST_API_HTTP_CLIENT } from 'src/httpclients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-test';

  constructor(@Inject(MY_REST_API_HTTP_CLIENT) private httpClient: HttpClient) {}

  onMakeHttpCall() {
    const url = 'https://httpbin.org/get';

    this.httpClient
      .get('https://httpbin.org/get')
      .subscribe()
  }
}
