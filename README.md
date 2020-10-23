# OrderMate: Joey's Hamburger Barn demo project

## Installation and starting the app

-   Copy .env.development.example and rename to .env.development
-   Update ACCESS_TOKEN with your access token in the above file
-   Run the command `yarn` in your terminal to install dependencies
-   Run the command `yarn start` in your terminal to start the app, accept any HTTPS security warnings for local development

## Design considerations

The product data structure is designed to easily seperate products into sections (ie Mains, Sides, Drinks) as well as provide customisation options (ie add cheese to the hamburger) when applicable.

As we only have 3 products I've kept the products in the one category but the app is ready to display titles for sections when the data is available.

The requirements note that orders need to be recorded for review at the end of the day, this demo solution is assuming that the data is saved only for the duration of the applications' session - not a database solution.

## Possible future enhancements
-   Ability to edit/remove an order item
-   Create a database to store orders
-   Create an admin interface to allow Joey to add new products/options and update pricing
-   Design a logo and create proper branding

## References links
