import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulRajabPage } from './alusul-rajab.page';

describe('AlusulRajabPage', () => {
  let component: AlusulRajabPage;
  let fixture: ComponentFixture<AlusulRajabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulRajabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulRajabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
