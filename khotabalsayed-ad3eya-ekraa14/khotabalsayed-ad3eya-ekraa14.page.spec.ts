import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa14Page } from './khotabalsayed-ad3eya-ekraa14.page';

describe('KhotabalsayedAd3eyaEkraa14Page', () => {
  let component: KhotabalsayedAd3eyaEkraa14Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
