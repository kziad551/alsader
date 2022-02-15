import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZekraE7yaaAljamaherPage } from './zekra-e7yaa-aljamaher.page';

describe('ZekraE7yaaAljamaherPage', () => {
  let component: ZekraE7yaaAljamaherPage;
  let fixture: ComponentFixture<ZekraE7yaaAljamaherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZekraE7yaaAljamaherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZekraE7yaaAljamaherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
