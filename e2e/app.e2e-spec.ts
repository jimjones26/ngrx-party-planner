import { NgrxPartyPlannerPage } from './app.po';

describe('ngrx-party-planner App', () => {
  let page: NgrxPartyPlannerPage;

  beforeEach(() => {
    page = new NgrxPartyPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
