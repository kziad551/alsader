import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mawk3AlesteshhadSuwarPage } from './mawk3-alesteshhad-suwar.page';

describe('Mawk3AlesteshhadSuwarPage', () => {
  let component: Mawk3AlesteshhadSuwarPage;
  let fixture: ComponentFixture<Mawk3AlesteshhadSuwarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mawk3AlesteshhadSuwarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mawk3AlesteshhadSuwarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
