import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAlma3unPage } from './tafser-alma3un.page';

describe('TafserAlma3unPage', () => {
  let component: TafserAlma3unPage;
  let fixture: ComponentFixture<TafserAlma3unPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAlma3unPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAlma3unPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
