import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Face Snap',
      'A simple face snap application',
      'https://www.w3schools.com/w3images/avatar1.png',
      new Date,
      5),
    new FaceSnap(
      'Super Face Snap',
      'A super face snap application',
      'https://www.w3schools.com/w3images/avatar3.png',
      new Date,
      100),
    new FaceSnap(
      'Last Face Snap',
      'A last face snap application',
      //generate a random image
      'https://www.w3schools.com/w3images/avatar5.png',
      new Date,
      1150).withLocation('A la plage')
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);

  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error(`FaceSnap with id ${faceSnapId} not found`);
    }
    return foundFaceSnap;
  }

}
