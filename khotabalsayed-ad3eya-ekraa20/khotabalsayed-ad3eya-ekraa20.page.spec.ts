import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa20Page } from './khotabalsayed-ad3eya-ekraa20.page';

describe('KhotabalsayedAd3eyaEkraa20Page', () => {
  let component: KhotabalsayedAd3eyaEkraa20Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa20Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
