import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa22Page } from './khotabalsayed-ad3eya-ekraa22.page';

describe('KhotabalsayedAd3eyaEkraa22Page', () => {
  let component: KhotabalsayedAd3eyaEkraa22Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa22Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
