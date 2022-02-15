import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayarajabPage } from './kefayarajab.page';

describe('KefayarajabPage', () => {
  let component: KefayarajabPage;
  let fixture: ComponentFixture<KefayarajabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayarajabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayarajabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
