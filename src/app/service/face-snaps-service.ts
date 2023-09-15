import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {


    mySnap!: FaceSnap;
    myOtherSnap!: FaceSnap;
    myLastSnap!: FaceSnap;


    faceSnaps: FaceSnap[] = [
        this.mySnap = new FaceSnap(1, 'Arcibald',
            'Mon Milleur ami depis tout petit !',
            'https://www.avvenire.it/c/2017/PublishingImages/debda429421d455a8975d6ba03e67d65/caparezza.jpg?width=1024',
            new Date(),
            1000,
            'madrid'
        ),
        this.myOtherSnap = new FaceSnap(2, 'Catalessi',
            'My Dog!',
            'https://lemagduchien.ouest-france.fr/images/dossiers/2022-08/mini/lassie-chien-fidele-072140-650-400.jpg',
            new Date(),
            47,
            'paris'
        ),
        this.myLastSnap = new FaceSnap(3, 'Moffetta',
            'Moffetta Boy!',
            'https://www.iper.it/archivio/magazine/grandi/5836cedd5af01_big.jpg',
            new Date(),
            0
        )

    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap'| 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap'? faceSnap.snaps++ : faceSnap.snaps--; 
    }

}