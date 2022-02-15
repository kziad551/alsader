import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa39Page } from './khotabalsayed-ad3eya-ekraa39.page';

describe('KhotabalsayedAd3eyaEkraa39Page', () => {
  let component: KhotabalsayedAd3eyaEkraa39Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa39Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa39Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa39Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
