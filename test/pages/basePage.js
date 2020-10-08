import commands from '../support/commands'

export default class BasePage {

    open(path) {
        return browser.url(path);
    }
}
