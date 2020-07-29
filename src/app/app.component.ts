import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('http://157.245.138.232:9091/api/v1/test/superheroes')
      .subscribe((data) => {
        //console.warn(data);
        this.postData = data;
      });
  }

  title = 'Fran-prueba';
}
