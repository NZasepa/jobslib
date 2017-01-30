import { JobslibPage } from './app.po';

describe('jobslib App', function() {
  let page: JobslibPage;

  beforeEach(() => {
    page = new JobslibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
