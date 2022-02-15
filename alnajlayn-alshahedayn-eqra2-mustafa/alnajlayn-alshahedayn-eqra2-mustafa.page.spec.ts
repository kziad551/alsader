import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynEqra2MustafaPage } from './alnajlayn-alshahedayn-eqra2-mustafa.page';

describe('AlnajlaynAlshahedaynEqra2MustafaPage', () => {
  let component: AlnajlaynAlshahedaynEqra2MustafaPage;
  let fixture: ComponentFixture<AlnajlaynAlshahedaynEqra2MustafaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlnajlaynAlshahedaynEqra2MustafaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlnajlaynAlshahedaynEqra2MustafaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
