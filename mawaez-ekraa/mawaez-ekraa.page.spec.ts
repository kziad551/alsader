import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MawaezEkraaPage } from './mawaez-ekraa.page';

describe('MawaezEkraaPage', () => {
  let component: MawaezEkraaPage;
  let fixture: ComponentFixture<MawaezEkraaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawaezEkraaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MawaezEkraaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
