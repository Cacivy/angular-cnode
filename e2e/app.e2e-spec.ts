import { CnodePage } from './app.po';

describe('cnode App', function() {
  let page: CnodePage;

  beforeEach(() => {
    page = new CnodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
