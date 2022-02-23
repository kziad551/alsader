import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mawk3-alesteshhad-eqra2',
  templateUrl: './mawk3-alesteshhad-eqra2.page.html',
  styleUrls: ['./mawk3-alesteshhad-eqra2.page.scss'],
})
export class Mawk3AlesteshhadEqra2Page implements OnInit {

  private data:any = [];
  public content:any[] = [];



  constructor(private http: HttpClient,private storage: Storage,) { 
  }

  ngOnInit() { 
    this.data = [];
    this.content = [];
    const url= 'https://strapi.alsader.net/api/mwka-esteshhad-docs?filters[id][$eq]=1'
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