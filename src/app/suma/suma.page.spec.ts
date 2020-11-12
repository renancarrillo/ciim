import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SumaPage } from './suma.page';

describe('SumaPage', () => {
  let component: SumaPage;
  let fixture: ComponentFixture<SumaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SumaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
