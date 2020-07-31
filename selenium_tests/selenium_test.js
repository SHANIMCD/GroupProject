const { elementsLocated } = require('selenium-webdriver/lib/until');

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const MovieTitle = 'BatmanTest';
const ScreenDate = '101020'
const ScreenTime = '1900';
const CustName = 'Selenium';

// click screens page
driver.get('http://localhost:3000').then(function () {
    driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/nav/div/div/a[1]')).click().then(function () {
        driver.getCurrentUrl().then(function (url) {
            console.log(url)
            if (url === 'http://localhost:3000/screens') {
                console.log('Test passed');
            } else {
                console.log('Test failed');
            }
            // opening times
            driver.get('http://localhost:3000/screens').then(function () {
                driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/nav/div/div/a[2]')).click().then(function () {
                    driver.getCurrentUrl().then(function (url) {
                        console.log(url)
                        if (url === 'http://localhost:3000/opentimes') {
                            console.log('Test passed');
                        } else {
                            console.log('Test failed');
                        }
                        // ticket bookings
                        driver.get('http://localhost:3000/opentimes').then(function () {
                            driver.findElement(webdriver.By.xpath('/html/body/div/div/div[1]/nav/div/div/a[3]')).click().then(function () {
                                driver.getCurrentUrl().then(function (url) {
                                    console.log(url)
                                    if (url === 'http://localhost:3000/ticketBookings') {
                                        console.log('Test passed');
                                    } else {
                                        console.log('Test failed');
                                    }
                                    // Go back home
                                    driver.get('http://localhost:3000/ticketBookings').then(function () {
                                        driver.findElement(webdriver.By.xpath('/html/body/div/div/div[3]/nav/div/div/a')).click().then(function () {
                                            driver.getCurrentUrl().then(function (url) {
                                                console.log(url)
                                                if (url === 'http://localhost:3000/') {
                                                    console.log('Test passed');
                                                } else {
                                                    console.log('Test failed');
                                                }
                                                // classifications
                                                driver.get('http://localhost:3000').then(function () {
                                                    driver.findElement(webdriver.By.xpath('/html/body/div/div/div[3]/nav/div/div/a[2]')).click().then(function () {
                                                        driver.getCurrentUrl().then(function (url) {
                                                            console.log(url)
                                                            if (url === 'http://localhost:3000/filmClassification') {
                                                                console.log('Test passed');
                                                            } else {
                                                                console.log('Test failed');
                                                            }
                                                            driver.quit();
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});