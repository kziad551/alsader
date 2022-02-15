import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2J4Page } from './lekaa-hanana-eqra2-j4.page';

describe('LekaaHananaEqra2J4Page', () => {
  let component: LekaaHananaEqra2J4Page;
  let fixture: ComponentFixture<LekaaHananaEqra2J4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaaHananaEqra2J4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaaHananaEqra2J4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
