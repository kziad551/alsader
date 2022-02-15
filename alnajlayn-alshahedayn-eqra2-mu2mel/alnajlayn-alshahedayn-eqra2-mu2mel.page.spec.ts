import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynEqra2Mu2melPage } from './alnajlayn-alshahedayn-eqra2-mu2mel.page';

describe('AlnajlaynAlshahedaynEqra2Mu2melPage', () => {
  let component: AlnajlaynAlshahedaynEqra2Mu2melPage;
  let fixture: ComponentFixture<AlnajlaynAlshahedaynEqra2Mu2melPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlnajlaynAlshahedaynEqra2Mu2melPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlnajlaynAlshahedaynEqra2Mu2melPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
