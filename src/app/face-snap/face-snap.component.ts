import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = "Mon millerur ami depuis tout petit !";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'data:image/jpeg;base64,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';
    this.buttonText = 'Oh Snap!';
    
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!'
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }

  }

}