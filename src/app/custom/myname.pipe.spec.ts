import { MynamePipe } from './myname.pipe';

describe('MynamePipe', () => {
  it('create an instance', () => {
    const pipe = new MynamePipe();
    expect(pipe).toBeTruthy();
  });
});
