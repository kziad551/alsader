import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa36Page } from './khotabalsayed-ad3eya-ekraa36.page';

describe('KhotabalsayedAd3eyaEkraa36Page', () => {
  let component: KhotabalsayedAd3eyaEkraa36Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa36Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa36Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa36Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
