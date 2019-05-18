import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app';

  constructor(private http: HttpClient, private sw: SwUpdate) {

  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/posts").subscribe(res => {
      console.log(res);
    });
  }

  
}
