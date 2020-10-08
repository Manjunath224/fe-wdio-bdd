import {Given, When} from 'cucumber';
import OnPageFilterComponent from '../pages/onPageFilterComponent.page'

When(/^User can see onPage filter component$/,  async () => {
    await OnPageFilterComponent.verifyPageFilterCompIsDisplayed();
});
