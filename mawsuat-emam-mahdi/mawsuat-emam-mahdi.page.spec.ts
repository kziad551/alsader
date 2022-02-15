import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MawsuatEmamMahdiPage } from './mawsuat-emam-mahdi.page';

describe('MawsuatEmamMahdiPage', () => {
  let component: MawsuatEmamMahdiPage;
  let fixture: ComponentFixture<MawsuatEmamMahdiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuatEmamMahdiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MawsuatEmamMahdiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
