import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-mawezahawaejalnas',
  templateUrl: './mawezahawaejalnas.page.html',
  styleUrls: ['./mawezahawaejalnas.page.scss'],
})
export class MawezahawaejalnasPage implements OnInit {

  private data:any = [];
  public content:any[] = [];



  constructor(private http: HttpClient,private storage: Storage,) { 
  }

  ngOnInit() { 
    this.data = [];
    this.content = [];
    const url= 'https://strapi.alsader.net/api/mawaez-akhlakya-docs?filters[id][$eq]=8'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      var i =0;
      for ( i=0; i< this.data.data.length; i++ ) {
       var array =[];
       array["title"] = this.data.data[i].attributes.title;
       array["text"] = this.data.data[i].attributes.link;
       this.content.push(array);      
      }
    }) 
}}