import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { HttpClient } from "@angular/common/http"; 
@Component({
  selector: 'app-sayed-markadalamer-img',
  templateUrl: './sayed-markadalamer-img.page.html',
  styleUrls: ['./sayed-markadalamer-img.page.scss'],
})
export class SayedMarkadalamerImgPage implements OnInit {
  private data:any = [];
  public content:any[] = [];
  constructor(
    private http: HttpClient,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public navCtrl: NavController,private photoViewer: PhotoViewer) { 
    }

  ngOnInit() {
    const url= 'https://strapi.alsader.net/api/alsuwars?filters[alsuwar_cat][title][$eq]=salat-jama3a&populate=*'
      this.http.get(url).subscribe((res)=>{
        this.data = res
        var i =0;
        for ( i=0; i< this.data.data.length; i++ ) {
         var array =[];
         array["title"] = this.data.data[i].attributes.title;
         array["link"] = this.data.data[i].attributes.link;
         this.content.push(array);      
        }
      }) 
 }
  
  
 
  
   
  
showPhoto(url:string)
{
   this.photoViewer.show(url, '', {share: true});

}}