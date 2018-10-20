import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTemplateLoaderComponent } from './dynamic-template-loader.component';

describe('DynamicTemplateLoaderComponent', () => {
  let component: DynamicTemplateLoaderComponent;
  let fixture: ComponentFixture<DynamicTemplateLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTemplateLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTemplateLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
