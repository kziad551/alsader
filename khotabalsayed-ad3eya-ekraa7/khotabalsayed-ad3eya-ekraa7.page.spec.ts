import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa7Page } from './khotabalsayed-ad3eya-ekraa7.page';

describe('KhotabalsayedAd3eyaEkraa7Page', () => {
  let component: KhotabalsayedAd3eyaEkraa7Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
