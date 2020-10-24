# OrderMate: Joey's Hamburger Barn demo project

## Installation and starting the app

-   Run the command `yarn` in your terminal to install dependencies
-   Run the command `yarn start` in your terminal to start the app

## Development and design notes

The product data structure is designed to easily seperate products into sections (ie Mains, Sides, Drinks) as well as provide customisation options (ie add cheese to the hamburger) when applicable.

As we only have 3 products I've kept the products in the one category but the app is ready to display titles for sections when the data is available.

The requirements note that orders need to be recorded for review at the end of the day, this demo solution is assuming that the data is saved only for the duration of the applications' session using React's context API - not a database solution.

I've included a few sample tests in OrderForm and OrderSummary components.

I wound up spending a couple of days on this project.

## Possible future enhancements
-   Ability to edit/remove an order item from the Order Summary prior to submitting
-   Group items in the Order Summary when multiple items are added individually (ie two seperate Coke items would become one Coke with quantity of 2)
-   Improve Order History page design - the requirements weren't clear if this was required so I wanted to include something here
-   Create a database to store orders
-   Create an admin interface to allow Joey to add new products/options and update pricing
-   Design a logo and create proper branding

## Issues
- 'waitFor' in tests was throwing MutationObserver issues. I added a shim per [option 3 here](https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0) to handle this issue.