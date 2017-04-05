import { FormTdPage } from './app.po';

describe('form-td App', () => {
  let page: FormTdPage;

  beforeEach(() => {
    page = new FormTdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
