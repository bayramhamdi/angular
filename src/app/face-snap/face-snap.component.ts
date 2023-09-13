import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
 title!: string;
 description!:string;
 createdDate!: Date;
 snaps!:number;
 imageUrl!:string;
 ngOnInit(): void {
   this.title = 'Dog';
   this.description ='Best dog';
   this.createdDate = new Date();
   this.snaps = 6;
   this.imageUrl = 'https://hips.hearstapps.com/hmg-prod/images/labrador-puppy-royalty-free-image-1626252338.jpg?crop=0.667xw:1.00xh;0.173xw,0&resize=2048:*'
 }
}
