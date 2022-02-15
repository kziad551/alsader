import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa2Page } from './khotabalsayed-ad3eya-ekraa2.page';

describe('KhotabalsayedAd3eyaEkraa2Page', () => {
  let component: KhotabalsayedAd3eyaEkraa2Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
