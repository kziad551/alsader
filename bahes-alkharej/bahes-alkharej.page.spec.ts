import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BahesAlkharejPage } from './bahes-alkharej.page';

describe('BahesAlkharejPage', () => {
  let component: BahesAlkharejPage;
  let fixture: ComponentFixture<BahesAlkharejPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BahesAlkharejPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BahesAlkharejPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
