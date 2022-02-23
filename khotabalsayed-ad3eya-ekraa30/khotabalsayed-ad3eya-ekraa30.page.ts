import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
@Component({
  selector: 'app-khotabalsayed-ad3eya-ekraa30',
  templateUrl: './khotabalsayed-ad3eya-ekraa30.page.html',
  styleUrls: ['./khotabalsayed-ad3eya-ekraa30.page.scss'],
})
export class KhotabalsayedAd3eyaEkraa30Page implements OnInit {

  private data:any = [];  
  public content:any[] = [];
 
 constructor(private http: HttpClient,) {
   }
 
  ngOnInit() { 
       
           const url= 'https://strapi.alsader.net/api/khotab-al-jomaa-docs?filters[id][$eq]=124?filters[khotab-al-jomaa-doc-cats][title][$eq]=khotab-adeya-docs&locale=ar-IQ'
           this.http.get(url).subscribe((res)=>{
             this.data = res
             var i =0;
             for ( i=0; i< this.data.data.length; i++ ) {
               var array =[];
               array["title"] = this.data.data[i].attributes.title;
               array["titleP1"] = this.data.data[i].attributes.titleP1;
               array["p1"] = this.data.data[i].attributes.p1;
               array["titleP2"] = this.data.data[i].attributes.titleP2;
               array["p2"] = this.data.data[i].attributes.p2;
               this.content.push(array);      
              }
           }) 
         }}
