import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynSuwarPage } from './alnajlayn-alshahedayn-suwar.page';

describe('AlnajlaynAlshahedaynSuwarPage', () => {
  let component: AlnajlaynAlshahedaynSuwarPage;
  let fixture: ComponentFixture<AlnajlaynAlshahedaynSuwarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlnajlaynAlshahedaynSuwarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlnajlaynAlshahedaynSuwarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
