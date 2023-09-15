export class FaceSnap {
    // title!: string;
    //  description!: string;
    //  imageUrl!: string;
    //  createdDate!: Date;
    //  snaps!: number;
    //  location?:string;

    constructor(
        public id:number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdDate: Date,
        public snaps: number,
        public location?: string) {

    }




}