import { DynamicTemplateModule } from './dynamic-template.module';

describe('DynamicTemplateModule', () => {
  let dynamicTemplateModule: DynamicTemplateModule;

  beforeEach(() => {
    dynamicTemplateModule = new DynamicTemplateModule();
  });

  it('should create an instance', () => {
    expect(dynamicTemplateModule).toBeTruthy();
  });
});
