import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa4Page } from './khotabalsayed-ad3eya-ekraa4.page';

describe('KhotabalsayedAd3eyaEkraa4Page', () => {
  let component: KhotabalsayedAd3eyaEkraa4Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
