
// Default discount object
const EMPTY_DISCOUNT = {
  discountApplicationStrategy: "First",
  discounts: [],
};

export function run(input) {
  const targets = input.cart.lines.filter(line => {
    if(line.merchandise.__typename === "ProductVariant") {
      const hasLimitedEditionTag = line.merchandise.product.hasAnyTag;
      return hasLimitedEditionTag === false;
    }
    return false;
  }).map((line => {
    return {
      productVariant: {
        id: line.merchandise.id,
      },
    }
  }));


  const DISCOUNT_ITEMS = {
    discountApplicationStrategy: "Maximum",
    discounts: [
      {
        targets: targets,
        value: {
          percentage: {
            value: 10,
          }
        },
        message: "10% off",
      }
    ]

  }
  
  return targets.length === 0 ?  EMPTY_DISCOUNT : DISCOUNT_ITEMS;
};