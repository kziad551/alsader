import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from "@angular/common/http"; 
@Component({
  selector: 'app-sayed-mawaladeh-img',
  templateUrl: './sayed-mawaladeh-img.page.html',
  styleUrls: ['./sayed-mawaladeh-img.page.scss'],
})
export class SayedMawaladehImgPage implements OnInit {

  private data:any = [];
  public content:any[] = [];
  constructor(
    private http: HttpClient,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public navCtrl: NavController,private photoViewer: PhotoViewer) { 
    }

  ngOnInit() {
    const url= 'https://strapi.alsader.net/api/alsuwars?filters[alsuwar_cat][title][$eq]=m3-waldeh&populate=*'
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

