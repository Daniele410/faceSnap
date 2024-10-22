import {Component, OnInit} from '@angular/core';

import {FaceSnapComponent} from "../face-snap/face-snap.component";

import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {FaceSnap} from "../core/models/face-snap";
import {FaceSnapsService} from "../core/services/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, AsyncPipe, NgForOf],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
   /* this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();*/
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

}
