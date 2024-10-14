import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapComponent} from "../face-snap/face-snap.component";
import {FaceSnapsService} from '../services/face-snaps.service';
import {interval, Subject, take, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();


    interval(1000).pipe(
      take(5),
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}
