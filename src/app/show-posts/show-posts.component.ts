import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  posts = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/posts").subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  requestNotification() {
    Notification.requestPermission().then(result => {
      console.log("result:", result);
      if (result === 'granted') {
        this.randomNotification();
      }
    });
  }

  randomNotification() {
    var randomItem = Math.floor(Math.random());
    var notifTitle = 'Akhilesh Notification';
    var notifBody = 'Created by Akhilesh';
    var notifImg = '/favicon.ico';
    var options = {
      badge: notifImg,
      body: notifBody,
      icon: notifImg,
      image: notifImg
    }
    var notif = new Notification(notifTitle, options);
    setTimeout(this.randomNotification, 30000);
  }

}
