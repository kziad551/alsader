import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa33Page } from './khotabalsayed-ad3eya-ekraa33.page';

describe('KhotabalsayedAd3eyaEkraa33Page', () => {
  let component: KhotabalsayedAd3eyaEkraa33Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa33Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa33Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
