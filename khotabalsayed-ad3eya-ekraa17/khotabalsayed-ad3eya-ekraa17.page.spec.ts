import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa17Page } from './khotabalsayed-ad3eya-ekraa17.page';

describe('KhotabalsayedAd3eyaEkraa17Page', () => {
  let component: KhotabalsayedAd3eyaEkraa17Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa17Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
