import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa29Page } from './khotabalsayed-ad3eya-ekraa29.page';

describe('KhotabalsayedAd3eyaEkraa29Page', () => {
  let component: KhotabalsayedAd3eyaEkraa29Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa29Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa29Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
