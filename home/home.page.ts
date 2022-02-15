import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { DrawerState } from 'ion-bottom-drawer';
import {  ViewChild } from '@angular/core'
import { IonContent } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //  splash = true;
  @Input() name: "hello world!!";

  @ViewChild(IonContent, {static:false}) content: any;

  shouldBounce = false;
  dockedHeight = 810;
  distanceTop = 0;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 810;
  transition=0.05;

  sliderOpts = {
    autoplay: true,
    speed: 400,
    loop: true,
    allowTouchMove: false,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }
  constructor(private streamingMedia: StreamingMedia,private modalCtr: ModalController,private translate: TranslateService,private storage: Storage,private splashScreen: SplashScreen,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router)  {
    translate.setDefaultLang('ar');

  }
  public showImage;
  ngOnInit() { 
    this.showImage = true;

  setTimeout(()=>{
      this.showImage = false;
  },16200);
    }


    ionViewWillEnter(){


      //  setTimeout(() => this.splash = false, 7000);
      this.showImage = true;
      setTimeout(()=>{
        this.showImage = false;
   },9000);
      // this.content.scrollToTop(2500);
    }

    swipeEvent(e) {
      if (e.direction == 8) {
        let y = document.getElementById('section1').offsetTop;
        this.content.scrollToPoint(0, y,1500);
      }
      if(e.direction == 16){
        this.content.scrollToTop(1500);
      }
    }

    moveToPage(pageName) {
      setTimeout( () => {
        let options: NativeTransitionOptions = {
          direction: 'up',
          duration: 400,
        }
        this.nativePageTransitions.flip(options);
        this.router.navigate([pageName]);
      }, 350);

     }


}
