import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa23Page } from './khotabalsayed-ad3eya-ekraa23.page';

describe('KhotabalsayedAd3eyaEkraa23Page', () => {
  let component: KhotabalsayedAd3eyaEkraa23Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa23Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
