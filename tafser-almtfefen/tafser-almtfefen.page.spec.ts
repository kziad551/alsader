import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAlmtfefenPage } from './tafser-almtfefen.page';

describe('TafserAlmtfefenPage', () => {
  let component: TafserAlmtfefenPage;
  let fixture: ComponentFixture<TafserAlmtfefenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAlmtfefenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAlmtfefenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
