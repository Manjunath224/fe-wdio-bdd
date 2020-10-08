class OnPageFilter {

    get onPageFilterComponent() {
        return $('[data-component="OnPageFilterBody"]')
    }

    get saveFilterButton() {
        return this.onPageFilterComponent.$('button>span[data-key*=save]');
    }

    async verifyPageFilterCompIsDisplayed() {
        expect((await this.onPageFilterComponent)).toBeDisabled();
    }
}

export default new OnPageFilter();