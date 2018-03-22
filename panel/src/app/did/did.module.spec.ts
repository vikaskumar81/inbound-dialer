import { DidModule } from './did.module';

describe('DidModule', () => {
  let didModule: DidModule;

  beforeEach(() => {
    didModule = new DidModule();
  });

  it('should create an instance', () => {
    expect(didModule).toBeTruthy();
  });
});
