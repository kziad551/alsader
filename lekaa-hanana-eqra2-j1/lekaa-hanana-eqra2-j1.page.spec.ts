import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2J1Page } from './lekaa-hanana-eqra2-j1.page';

describe('LekaaHananaEqra2J1Page', () => {
  let component: LekaaHananaEqra2J1Page;
  let fixture: ComponentFixture<LekaaHananaEqra2J1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaaHananaEqra2J1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaaHananaEqra2J1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
