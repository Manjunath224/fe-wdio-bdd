browser.addCommand('setAcceptCookiesTrue', async () => {
    await browser.setCookies({name: 'OptanonAlertBoxClosed', value: new Date().toISOString()});
    await browser.refresh();
});