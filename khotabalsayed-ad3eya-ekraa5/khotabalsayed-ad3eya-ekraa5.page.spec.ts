import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa5Page } from './khotabalsayed-ad3eya-ekraa5.page';

describe('KhotabalsayedAd3eyaEkraa5Page', () => {
  let component: KhotabalsayedAd3eyaEkraa5Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
