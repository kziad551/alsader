import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-alnajlayn-alshahedayn-eqra2-mustafa',
  templateUrl: './alnajlayn-alshahedayn-eqra2-mustafa.page.html',
  styleUrls: ['./alnajlayn-alshahedayn-eqra2-mustafa.page.scss'],
})
export class AlnajlaynAlshahedaynEqra2MustafaPage implements OnInit {

  private data:any = [];
  public content:any[] = [];



  constructor(private http: HttpClient,private storage: Storage,) { 
  }

  ngOnInit() { 
    this.data = [];
    this.content = [];
    const url= 'https://strapi.alsader.net/api/alnajlayen-docs?filters[id][$eq]=1'
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