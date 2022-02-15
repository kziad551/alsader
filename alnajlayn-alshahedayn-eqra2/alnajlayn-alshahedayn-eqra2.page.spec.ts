import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynEqra2Page } from './alnajlayn-alshahedayn-eqra2.page';

describe('AlnajlaynAlshahedaynEqra2Page', () => {
  let component: AlnajlaynAlshahedaynEqra2Page;
  let fixture: ComponentFixture<AlnajlaynAlshahedaynEqra2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlnajlaynAlshahedaynEqra2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlnajlaynAlshahedaynEqra2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
