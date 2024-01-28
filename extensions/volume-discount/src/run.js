import { DiscountApplicationStrategy } from "../generated/api";

// Default discount object
const EMPTY_DISCOUNT = {
  discountApplicationStrategy: DiscountApplicationStrategy.First,
  discounts: [],
};

export function run(input) {
  // Parse the configuration from the input
  const configuration = JSON.parse(input?.discountNode?.metafield?.value ?? "{}");

  // Check if the configuration is valid
  if (!configuration.quantity || !configuration.percentage) {
    return EMPTY_DISCOUNT;
  }

  // Identify the cart lines that qualify for the discount
  const targets = input.cart.lines
    .filter(line => line.quantity >= configuration.quantity && line.merchandise.__typename == "ProductVariant")
    .map(line => {
      // Create a target object for each qualifying line
      const variant = (line.merchandise);
      return({
        productVariant: {
          id: variant.id
        }
      });
    });

  // Check if any cart lines qualify for the discount
  if (!targets.length) {
    console.error("No cart lines qualify for volume discount.");
    return EMPTY_DISCOUNT;
  }

  // Return a discount object for the qualifying cart lines
  return {
    discounts: [
      {
        targets,
        value: {
          percentage: {
            value: configuration.percentage.toString()
          }
        }
      }
    ],
    discountApplicationStrategy: DiscountApplicationStrategy.First
  };
};