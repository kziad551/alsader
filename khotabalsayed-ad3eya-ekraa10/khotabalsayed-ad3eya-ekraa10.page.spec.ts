import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa10Page } from './khotabalsayed-ad3eya-ekraa10.page';

describe('KhotabalsayedAd3eyaEkraa10Page', () => {
  let component: KhotabalsayedAd3eyaEkraa10Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
