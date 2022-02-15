import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa42Page } from './khotabalsayed-ad3eya-ekraa42.page';

describe('KhotabalsayedAd3eyaEkraa42Page', () => {
  let component: KhotabalsayedAd3eyaEkraa42Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa42Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa42Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
