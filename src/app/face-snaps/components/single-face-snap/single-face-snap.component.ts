import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, RouterLink} from '@angular/router';
import {AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, UpperCasePipe} from "@angular/common";
import {Observable, tap} from "rxjs";
import {FaceSnap} from "../core/models/face-snap";
import {FaceSnapsService} from "../core/services/face-snaps.service";

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
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, unSnap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.buttonText = 'Oh Snap!')
      );
    }
  }
}
