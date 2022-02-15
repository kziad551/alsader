import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlHetafatMp4Page } from './al-hetafat-mp4.page';

describe('AlHetafatMp4Page', () => {
  let component: AlHetafatMp4Page;
  let fixture: ComponentFixture<AlHetafatMp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlHetafatMp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlHetafatMp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
