import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2J3Page } from './lekaa-hanana-eqra2-j3.page';

describe('LekaaHananaEqra2J3Page', () => {
  let component: LekaaHananaEqra2J3Page;
  let fixture: ComponentFixture<LekaaHananaEqra2J3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaaHananaEqra2J3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaaHananaEqra2J3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
