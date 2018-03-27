import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('text1 should be empty string', () => {
    expect(page.findContentById('text1').getText()).toEqual('');
  });

  it('text2 should be empty string', () => {
    expect(page.findContentById('text2').getText()).toEqual('');
  });

  it('text1 should be init after button click', () => {
    page.findContentById('button').click();
    expect(page.findContentById('text1').getText()).toEqual('init');
  });

  it('text2 should be init after key in init', () => {
    page.findContentById('input_text').sendKeys('init');
    expect(page.findContentById('text2').getText()).toEqual('init');
  });

});
