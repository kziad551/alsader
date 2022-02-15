import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa11Page } from './khotabalsayed-ad3eya-ekraa11.page';

describe('KhotabalsayedAd3eyaEkraa11Page', () => {
  let component: KhotabalsayedAd3eyaEkraa11Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
