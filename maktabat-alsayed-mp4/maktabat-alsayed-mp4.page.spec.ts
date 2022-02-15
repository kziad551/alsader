import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaktabatAlsayedMp4Page } from './maktabat-alsayed-mp4.page';

describe('MaktabatAlsayedMp4Page', () => {
  let component: MaktabatAlsayedMp4Page;
  let fixture: ComponentFixture<MaktabatAlsayedMp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaktabatAlsayedMp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaktabatAlsayedMp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
