import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mawk3AlesteshhadEqra2Page } from './mawk3-alesteshhad-eqra2.page';

describe('Mawk3AlesteshhadEqra2Page', () => {
  let component: Mawk3AlesteshhadEqra2Page;
  let fixture: ComponentFixture<Mawk3AlesteshhadEqra2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mawk3AlesteshhadEqra2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mawk3AlesteshhadEqra2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
