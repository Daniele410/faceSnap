import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, UpperCasePipe} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink,
    NgIf,
    NgStyle,
    AsyncPipe

  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    /*if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }*/
  }

}
