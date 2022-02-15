import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa25Page } from './khotabalsayed-ad3eya-ekraa25.page';

describe('KhotabalsayedAd3eyaEkraa25Page', () => {
  let component: KhotabalsayedAd3eyaEkraa25Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa25Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa25Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
