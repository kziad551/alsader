import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-tafserzeyartamenallah',
  templateUrl: './tafserzeyartamenallah.page.html',
  styleUrls: ['./tafserzeyartamenallah.page.scss'],
})
export class TafserzeyartamenallahPage implements OnInit {
    forwardshow: boolean = true;
    private data:any = [];
    public content:any[] = [];
  
  
  
    constructor(private http: HttpClient,private storage: Storage,) { 
    }
  
    ngOnInit() { 
      this.data = [];
      this.content = [];
      const url= 'https://strapi.alsader.net/api/mawaez-akhlakya-docs?filters[id][$eq]=2'
      this.http.get(url).subscribe((res)=>{
        this.data = res
        var i =0;
        for ( i=0; i< this.data.data.length; i++ ) {
         var array =[];
         array["title"] = this.data.data[i].attributes.title;
         array["text"] = this.data.data[i].attributes.text;
         this.content.push(array);      
        }
      }) 
  }}