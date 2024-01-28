# Shopify Discountz App

## Instructions

Follow these steps to add a new discount extension to Discountz app:

1. **Create a New Extension**: Run the command `npm run shopify app generate extension -- --template product_discounts` to create a new extension.

2. **Define the Function Target**: Specify the input for your function target in the `run.graphql` file.

3. **Generate Types for Function Target**: Run the command `npm run shopify app function typegen` to generate the types for your function target.

4. **Create Function Logic**: Define the logic for your function in the `run.js` file.

5. **Create the Provider on Remix**: On Remix, create the provider by following the guidelines [here](https://shopify.dev/docs/apps/selling-strategies/discounts/experience/ui).

6. **Create the Interface**: Use Remix to create the interface for your discount.

7. **Deploy the Extension**: Follow the instructions [here](https://shopify.dev/docs/apps/deployment/web) to deploy your extension.

## Commands

`npm run dev`

`npm run deploy`