export class FaceSnap {

    location?: string;

    constructor(public title: string, public description: string, public imageUrl: string, public createdDate: Date, public snaps: number) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = createdDate;
        this.snaps = snaps;
    }

    addSnap(): void {
        this.snaps++;
    }
    removeSnap(): void {
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location;
    }
}