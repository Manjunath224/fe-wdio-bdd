import BasePage from './basePage';

class BusinessLeaseVehiclesPage extends BasePage {

    open() {
        return super.open('https://www.leaseplan.com/en-be/business/showroom/');
    }

    get vehicleTypeMajorFilter() {
        return {
            selected: $('[data-e2e-id$="business/showroom/"]'),
            electric: $('[data-e2e-id*="fuelTypes=electric"]'),
            suv: $('[data-e2e-id*="bodyTypes=suv"]'),
            automatic: $('[data-e2e-id*="transmissions=automatic"]'),
            family: $('[data-e2e-id*="bodyTypes=wagon"]'),
            petrol: $('[data-e2e-id*="fuelTypes=petrol"]'),
            premium: $('[data-e2e-id*="makemodel="]')
        }
    }

    get desktopFilterComponent() {
        return $('div[data-component="desktop-filters"]');
    }

    async desktopFilters() {
        const filters = await (await this.desktopFilterComponent).$$('div[data-component="FilterButton"]');
        return {
            popularFilters: filters[0],
            makeAndModel: filters[1],
            monthlyPrice: filters[2],
            fuelType: filters[3],
            moreFilters: filters[5],
        }
    }

    async getText() {
        return await (await this.vehicleTypeMajorFilter.electric).getText();
    }

    async clickPopularFilter() {
        await (await this.desktopFilters()).popularFilters.click();
    }

    async clickMakeModelFilter() {
        await (await this.desktopFilters()).makeAndModel.click();
    }

    async clickMonthlyPriceFilter() {
        await (await this.desktopFilters()).monthlyPrice.click();
    }

    async clickFuelTypeFilter() {
        await (await this.desktopFilters()).fuelType.click();
    }

    async clickMoreFilter() {
        await (await this.desktopFilters()).moreFilters.click();
    }

    async getTextFilters() {
        return await ((await this.desktopFilters()).popularFilters).getText();
    }

}

export default new BusinessLeaseVehiclesPage();
