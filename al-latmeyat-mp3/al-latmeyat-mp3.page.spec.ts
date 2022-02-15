import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlLatmeyatMp3Page } from './al-latmeyat-mp3.page';

describe('AlLatmeyatMp3Page', () => {
  let component: AlLatmeyatMp3Page;
  let fixture: ComponentFixture<AlLatmeyatMp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlLatmeyatMp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlLatmeyatMp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
