import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2J2Page } from './lekaa-hanana-eqra2-j2.page';

describe('LekaaHananaEqra2J2Page', () => {
  let component: LekaaHananaEqra2J2Page;
  let fixture: ComponentFixture<LekaaHananaEqra2J2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaaHananaEqra2J2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaaHananaEqra2J2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
