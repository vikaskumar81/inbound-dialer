import { ExtensionModule } from './extension.module';

describe('ExtensionModule', () => {
  let extensionModule: ExtensionModule;

  beforeEach(() => {
    extensionModule = new ExtensionModule();
  });

  it('should create an instance', () => {
    expect(extensionModule).toBeTruthy();
  });
});
