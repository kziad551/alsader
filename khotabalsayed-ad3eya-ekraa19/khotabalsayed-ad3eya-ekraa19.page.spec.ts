import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa19Page } from './khotabalsayed-ad3eya-ekraa19.page';

describe('KhotabalsayedAd3eyaEkraa19Page', () => {
  let component: KhotabalsayedAd3eyaEkraa19Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
