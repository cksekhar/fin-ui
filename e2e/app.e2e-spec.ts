import { FinUiPage } from './app.po';

describe('fin-ui App', function() {
  let page: FinUiPage;

  beforeEach(() => {
    page = new FinUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
