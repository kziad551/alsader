import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShaabanPage } from './alusul-shaaban.page';

describe('AlusulShaabanPage', () => {
  let component: AlusulShaabanPage;
  let fixture: ComponentFixture<AlusulShaabanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShaabanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShaabanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
