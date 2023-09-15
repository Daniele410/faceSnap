import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      this.mySnap = new FaceSnap('Arcibald',
        'Mon Milleur ami depis tout petit !',
        'https://www.avvenire.it/c/2017/PublishingImages/debda429421d455a8975d6ba03e67d65/caparezza.jpg?width=1024',
        new Date(),
        1000,
        'madrid'
      ),
      this.myOtherSnap = new FaceSnap('Catalessi',
        'My Dog!',
        'https://lemagduchien.ouest-france.fr/images/dossiers/2022-08/mini/lassie-chien-fidele-072140-650-400.jpg',
        new Date(),
       47,
        'paris'
      ),
      this.myLastSnap = new FaceSnap('Moffetta',
        'Moffetta Boy!',
        'https://www.iper.it/archivio/magazine/grandi/5836cedd5af01_big.jpg',
        new Date(),
        0
      )

    ];

  }
}
