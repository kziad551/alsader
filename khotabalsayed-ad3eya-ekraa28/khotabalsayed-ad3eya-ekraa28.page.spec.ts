import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa28Page } from './khotabalsayed-ad3eya-ekraa28.page';

describe('KhotabalsayedAd3eyaEkraa28Page', () => {
  let component: KhotabalsayedAd3eyaEkraa28Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa28Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa28Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
