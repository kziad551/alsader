import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaMp4Page } from './khotabalsayed-ad3eya-mp4.page';

describe('KhotabalsayedAd3eyaMp4Page', () => {
  let component: KhotabalsayedAd3eyaMp4Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaMp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaMp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaMp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
