import { NgSportifyPage } from './app.po';

describe('ng-sportify App', () => {
  let page: NgSportifyPage;

  beforeEach(() => {
    page = new NgSportifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
