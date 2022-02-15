import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa9Page } from './khotabalsayed-ad3eya-ekraa9.page';

describe('KhotabalsayedAd3eyaEkraa9Page', () => {
  let component: KhotabalsayedAd3eyaEkraa9Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
