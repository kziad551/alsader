import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa21Page } from './khotabalsayed-ad3eya-ekraa21.page';

describe('KhotabalsayedAd3eyaEkraa21Page', () => {
  let component: KhotabalsayedAd3eyaEkraa21Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa21Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
