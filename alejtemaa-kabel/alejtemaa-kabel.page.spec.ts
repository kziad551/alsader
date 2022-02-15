import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlejtemaaKabelPage } from './alejtemaa-kabel.page';

describe('AlejtemaaKabelPage', () => {
  let component: AlejtemaaKabelPage;
  let fixture: ComponentFixture<AlejtemaaKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlejtemaaKabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlejtemaaKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
