import {Given, When} from 'cucumber';
import BusinessLeaseVehiclesPage from '../pages/businessLeaseVehicles.page'

Given(/^I navigate to LeasePlan Business Vehicle Page$/, async () => {
    await BusinessLeaseVehiclesPage.open();
    await browser.setAcceptCookiesTrue();
});

When(/^User is in Business Vehicle Page$/,  async () => {
    console.log(await BusinessLeaseVehiclesPage.getText());
});

When(/^User click on Popular Filter to see options$/,  async () => {
    await BusinessLeaseVehiclesPage.clickPopularFilter();
});
