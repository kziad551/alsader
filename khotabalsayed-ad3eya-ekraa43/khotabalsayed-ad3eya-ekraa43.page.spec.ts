import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa43Page } from './khotabalsayed-ad3eya-ekraa43.page';

describe('KhotabalsayedAd3eyaEkraa43Page', () => {
  let component: KhotabalsayedAd3eyaEkraa43Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa43Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa43Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
