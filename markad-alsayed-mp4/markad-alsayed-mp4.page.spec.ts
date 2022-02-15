import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarkadAlsayedMp4Page } from './markad-alsayed-mp4.page';

describe('MarkadAlsayedMp4Page', () => {
  let component: MarkadAlsayedMp4Page;
  let fixture: ComponentFixture<MarkadAlsayedMp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkadAlsayedMp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarkadAlsayedMp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
