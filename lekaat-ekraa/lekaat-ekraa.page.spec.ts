import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaatEkraaPage } from './lekaat-ekraa.page';

describe('LekaatEkraaPage', () => {
  let component: LekaatEkraaPage;
  let fixture: ComponentFixture<LekaatEkraaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaatEkraaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaatEkraaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
