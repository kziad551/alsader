import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa37Page } from './khotabalsayed-ad3eya-ekraa37.page';

describe('KhotabalsayedAd3eyaEkraa37Page', () => {
  let component: KhotabalsayedAd3eyaEkraa37Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa37Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa37Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa37Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
