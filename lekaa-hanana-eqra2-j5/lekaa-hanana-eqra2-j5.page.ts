import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-lekaa-hanana-eqra2-j5',
  templateUrl: './lekaa-hanana-eqra2-j5.page.html',
  styleUrls: ['./lekaa-hanana-eqra2-j5.page.scss'],
})
export class LekaaHananaEqra2J5Page implements OnInit {

  private data:any = [];
  public content:any[] = [];



  constructor(private http: HttpClient,private storage: Storage,) { 
  }

  ngOnInit() { 
    this.data = [];
    this.content = [];
    const url= 'https://strapi.alsader.net/api/lekaat-hewarat-docs?filters[id][$eq]=5'
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