import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa40Page } from './khotabalsayed-ad3eya-ekraa40.page';

describe('KhotabalsayedAd3eyaEkraa40Page', () => {
  let component: KhotabalsayedAd3eyaEkraa40Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa40Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa40Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa40Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
