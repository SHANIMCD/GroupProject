# Cinema website for a well-known cinema chain, QA Cinemas

As a group project, our team was asked to build a new website for them, which represents information about current and up coming movies, listings times, information about the cinema including opening times and images of seating plans and screen rooms. Users can book a film using PayPal Checkout Integration.

## Getting Started

- Copy of the project can be found at https://github.com/SHANIMCD/GroupProject
- The repository for the Node/Express Server can be found at: https://github.com/rachchan/cinemaexpress
- The repository for the Selenium tests can be found at: https://github.com/misstaevere/CinemaSelenium

### Prerequisites

The project needs the following to run:
* Visual Studio Code (https://code.visualstudio.com/download)
* Node.js (https://nodejs.org/en/download/)
* MongoDB Shell (https://downloads.mongodb.com/compass/mongosh-0.0.8-win32.zip)
* Google Chrome (https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en)

For testing:
* Maven (https://maven.apache.org/download.cgi)

### Installing

To run the backend server:

```
- $ git clone  https://github.com/rachchan/cinemaexpress.git
- $ npm i (or npm install)
- $ cd server/
- $ node index.js
```
To run the frontend:

```
- $ git clone  https://github.com/SHANIMCD/GroupProject.git
- $ npm i (or npm install)
- $ cd secretcinema/
- $ npm start
```

## Running the tests
### Unit Tests 

### Java
```
- $ git clone git@github.com:misstaevere/CinemaSelenium.git
- $ mvn test
```
### JavaScript
```
- $ cd ../selenium_test.js
- $ node selenium_test.js
```
### Node.js
```
- $ git clone https://github.com/rachchan/cinemaexpress.git
- $ mocha --recursive --exit
```

## Authors

* **Rachel Chan** - [rachchan](https://github.com/rachchan)
* **Naomi Gabriel** - [ngabriel](https://github.com/ngabriel)
* **Shani McDonald** - [shanimcd](https://github.com/SHANIMCD)
* **Kärt Taevere** - [misstaevere](https://github.com/misstaevere)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments

* **Jordan Harrison** - [JHarry444](https://github.com/JHarry444)

* **The Open Movie Database** - (omdbapi.com)

* **Paypal** - (developer.paypal.com)

