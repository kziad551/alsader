import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa3Page } from './khotabalsayed-ad3eya-ekraa3.page';

describe('KhotabalsayedAd3eyaEkraa3Page', () => {
  let component: KhotabalsayedAd3eyaEkraa3Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
