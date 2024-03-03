import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjSharpComponent } from './proj-sharp.component';

describe('ProjSharpComponent', () => {
  let component: ProjSharpComponent;
  let fixture: ComponentFixture<ProjSharpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjSharpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjSharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
