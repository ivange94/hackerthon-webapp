import { HackerthonWebappPage } from './app.po';

describe('hackerthon-webapp App', () => {
  let page: HackerthonWebappPage;

  beforeEach(() => {
    page = new HackerthonWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
