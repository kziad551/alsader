import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlLatmeyatMp4Page } from './al-latmeyat-mp4.page';

describe('AlLatmeyatMp4Page', () => {
  let component: AlLatmeyatMp4Page;
  let fixture: ComponentFixture<AlLatmeyatMp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlLatmeyatMp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlLatmeyatMp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
