export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "mainheading",
        title: "Main Heading",
        type: "string",
      },
      {
        name: "relatedproduct",
        title: "Related Product",
        type: "string",
        options: {
          hotspot: true,
        },
      },
      {
        name: "shoppingcart",
        title: "Shopping Cart",
        type: "string",
        options: {
          hotspot: true,
        },
      },
      {
        name: "rs",
        title: "Rs.",
        type: "string",
      },
      {
        name: "add",
        title: "+Add",
        type: "string",
      },
      {
        name: "less",
        title: "-less",
        type: "string",
      },
      {
        name: "subtotal",
        title: "Subtotal",
        type: "string",
      },
      {
        name: "cart",
        title: "Cart",
        type: "string",
      },
      {
        name: "checkout",
        title: "Checkout",
        type: "string",
      },
      {
        name: "comparison",
        title: "Comparison",
        type: "string",
      },
      {
        name: "addtocart",
        title: "Add To Cart",
        type: "string",
      },
      {
        name: "share",
        title: "Share",
        type: "string",
      },
      {
        name: "compare",
        title: "Compare",
        type: "string",
      },
      {
        name: "like",
        title: "Like",
        type: "string"
      },
      {
        name: "name",
        title: "Product Name",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "price",
        title: "Price",
        type: "string",
      },
      {
        name: "oldPrice",
        title: "Old Price",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "button",
        title: "Button",
        type: "string",
      },
      {
        name: "label50",
        title: "Label 50%",
        type: "number",
        options: {
          hotspot: true,
        },
      },
      {
        name: "labelnew",
        title: "Label New",
        type: "string",
        options: {
          hotspot: true,
        },
      },
      {
        name: "imagelabelred",
        title: "Image Label Red",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "imagelabelgreen",
        title: "Image Label Green",
        type: "image",
        options: {
          hotspot: true,
        },
      }

    ],
  };
  