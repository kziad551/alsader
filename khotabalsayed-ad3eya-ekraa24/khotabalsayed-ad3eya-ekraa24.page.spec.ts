import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa24Page } from './khotabalsayed-ad3eya-ekraa24.page';

describe('KhotabalsayedAd3eyaEkraa24Page', () => {
  let component: KhotabalsayedAd3eyaEkraa24Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa24Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
