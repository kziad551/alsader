import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa18Page } from './khotabalsayed-ad3eya-ekraa18.page';

describe('KhotabalsayedAd3eyaEkraa18Page', () => {
  let component: KhotabalsayedAd3eyaEkraa18Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa18Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
