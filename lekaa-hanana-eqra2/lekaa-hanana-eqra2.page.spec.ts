import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2Page } from './lekaa-hanana-eqra2.page';

describe('LekaaHananaEqra2Page', () => {
  let component: LekaaHananaEqra2Page;
  let fixture: ComponentFixture<LekaaHananaEqra2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaaHananaEqra2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaaHananaEqra2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
