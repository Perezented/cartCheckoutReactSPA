# cartCheckoutReactSPA

A React cart/checkout process. A cart component that updates the quantity of each item in the cart, as well as allows a user to remove an item from a cart. The checkout form takes a users address and credit card information and would forward it to a server, in this case displays a crude confirmation page.

[Visit the site hosted on AWS Amplify](https://main.dvandepvx5xni.amplifyapp.com/)

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-^17.0.2-blue.svg)
![React-Router-Dom](https://img.shields.io/badge/react--router--dom-^5.2.0-darkblue?style=flat-square)
![Bootstrap](https://img.shields.io/badge/bootstrap-^5.0.0--beta3-red?style=flat-square)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
![Yup](https://img.shields.io/badge/yup-%5E0.32.9-yellow?style=flat-square)
![cypress](https://img.shields.io/badge/cypress-%5E4.14.1-orange?style=flat-square)

### How to Work App Locally

- Have npm and node installed
- Fork and clone the repo to install it as your own remote.
- Run: `npm install` to download all dependencies.
- Run: `npm start` to start your local development server.
- Project should be opening up on http://localhost:3000/

### Key Features

- User can remove items from cart
- User can update items in cart
- User can fill in address and credit card info
- User can submit all info to get a confirmation page

#### Front end deployed to `AWS Amplify`

# Installation Instructions

## Scripts

> Enter `npm command_name` into your terminal to run scripts below

```JSON
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "e2e": "cypress open"
```

## Cypress Tests

[Visit the project tests on cypress.io](https://dashboard.cypress.io/projects/ka37kf/runs/1/specs)

#

[Cypress Video 1, addressForm checking for limits on inputs that should have a length limit](https://dashboard.cypress.io/projects/ka37kf/runs/1/specs/818d667c-34ea-4003-8db0-00ae63182bac/video?utm_source=Dashboard&utm_medium=Share+URL&utm_campaign=Video)

#

![Cypress Test 1](/src/imgs/cart1.PNG)

#

[Cypress Video 2, Manipulates the cart by removing and changing quantities](https://dashboard.cypress.io/projects/ka37kf/runs/1/specs/5368d6be-fd86-44e3-ab43-7bf7542526cc/video?utm_source=Dashboard&utm_medium=Share+URL&utm_campaign=Video)

#

![Cypress Test 2](/src/imgs/cart2.PNG)

#

[Cypress Video 3, this test runs through the whole cart checkout process](https://dashboard.cypress.io/projects/ka37kf/runs/1/specs/6e490e9d-7818-4273-a63c-f2bf79099754/video?utm_source=Dashboard&utm_medium=Share+URL&utm_campaign=Video)

#

![Cypress Test 3](/src/imgs/cart3.PNG)

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

## Bugs/Issues

-

## Future Improvements

- Paypal/Debit card/Credit card selector
- Confirmation page
- The Market/Store to continue shopping
- Full NavBar
- Possible update cart button removal and have the quantity auto-update

- True Card Validation
