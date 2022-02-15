import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserBe2aPage } from './tafser-be2a.page';

describe('TafserBe2aPage', () => {
  let component: TafserBe2aPage;
  let fixture: ComponentFixture<TafserBe2aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserBe2aPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserBe2aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
