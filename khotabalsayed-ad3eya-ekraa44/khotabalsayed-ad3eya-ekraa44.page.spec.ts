import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa44Page } from './khotabalsayed-ad3eya-ekraa44.page';

describe('KhotabalsayedAd3eyaEkraa44Page', () => {
  let component: KhotabalsayedAd3eyaEkraa44Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa44Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa44Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa44Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
