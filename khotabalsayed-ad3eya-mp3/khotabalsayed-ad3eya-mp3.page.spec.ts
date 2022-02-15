import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaMp3Page } from './khotabalsayed-ad3eya-mp3.page';

describe('KhotabalsayedAd3eyaMp3Page', () => {
  let component: KhotabalsayedAd3eyaMp3Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaMp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaMp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaMp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
