import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa15Page } from './khotabalsayed-ad3eya-ekraa15.page';

describe('KhotabalsayedAd3eyaEkraa15Page', () => {
  let component: KhotabalsayedAd3eyaEkraa15Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
