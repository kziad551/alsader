import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlketobAlfatwyaPage } from './alketob-alfatwya.page';

describe('AlketobAlfatwyaPage', () => {
  let component: AlketobAlfatwyaPage;
  let fixture: ComponentFixture<AlketobAlfatwyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlketobAlfatwyaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlketobAlfatwyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
