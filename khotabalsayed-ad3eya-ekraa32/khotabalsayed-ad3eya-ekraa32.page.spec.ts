import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa32Page } from './khotabalsayed-ad3eya-ekraa32.page';

describe('KhotabalsayedAd3eyaEkraa32Page', () => {
  let component: KhotabalsayedAd3eyaEkraa32Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa32Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
