import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa12Page } from './khotabalsayed-ad3eya-ekraa12.page';

describe('KhotabalsayedAd3eyaEkraa12Page', () => {
  let component: KhotabalsayedAd3eyaEkraa12Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
