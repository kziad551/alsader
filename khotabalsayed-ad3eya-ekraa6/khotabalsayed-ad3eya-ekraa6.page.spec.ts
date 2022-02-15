import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa6Page } from './khotabalsayed-ad3eya-ekraa6.page';

describe('KhotabalsayedAd3eyaEkraa6Page', () => {
  let component: KhotabalsayedAd3eyaEkraa6Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
