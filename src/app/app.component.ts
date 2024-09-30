import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;


  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Face Snap',
      'A simple face snap application',
      'https://www.w3schools.com/w3images/avatar2.png',
      new Date,
      5);

    this.myOtherSnap = new FaceSnap(
      'Super Face Snap',
      'A super face snap application',
      'https://www.w3schools.com/w3images/avatar2.png',
      new Date,
      100);
      this.myLastSnap = new FaceSnap(
        'Last Face Snap',
        'A last face snap application',
        'https://www.w3schools.com/w3images/avatar3.png',
        new Date,
        1150);
  }

}
