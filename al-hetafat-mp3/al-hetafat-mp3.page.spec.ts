import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlHetafatMp3Page } from './al-hetafat-mp3.page';

describe('AlHetafatMp3Page', () => {
  let component: AlHetafatMp3Page;
  let fixture: ComponentFixture<AlHetafatMp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlHetafatMp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlHetafatMp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
