// export default {
//     name: "productcomparison",
//     title: "Product Comparison",
//     type: "documnet",
//     fields: [
//         {
//             name: "gotoproduct",
//             title: "Go to Product",
//             type: "string"
//         },
//         {
//             name: "pageformore",
//             title: "Page For More",
//             type: "string",
//         },
//         {
//             name: "products",
//             title: "Products",
//             type: "string",
//         },
//         {
//             name: "viewmore",
//             title: "View More",
//             type: "string",
//         },
//         {
//             name: "sofaoneimage",
//             title: "Sofa One Image",
//             type: "image",
//         },
//         {
//             name: "asgaardsofa",
//             title: "Asgaard Sofa",
//             type: "string",
//         },
//         {
//             name: "rs one",
//             title: "Rs. One",
//             type: "string",
//         },
//         {
//             name: "reviewsone",
//             title: "Reviews One",
//             type: "string",
//         },
//         {
//             name: "sofatwoimage",
//             title: "Sofa Two Image",
//             type: "string",
//         },
//         {
//             name: "outdoorsofaset",
//             title: "Outdoor Sofa Set",
//             type: "string",
//         },
//         {
//             name: "rs two",
//             title: "Rs. Two",
//             type: "string",
//         },
//         {
//             name: "reviewstwo",
//             title: "Reviews Two",
//             type: "string",
//         },
//         {
//             name: "addproduct",
//             title: "Add A Product",
//             type: "string",
//         },
//         {
//             name: "chooseproduct",
//             title: "Choose a Product",
//             type: "string",
//         },
//         {
//             name: "specification",
//             title: "Specification",
//             type: "string",
//         },
//         {
//             name: "addasgaardsofatocart",
//             title: "Add Asgaard Sofa to Cart",
//             type: "string",
//         },
//         {
//             name: "addoutdoorsofatocart",
//             title: "Add Outdoor Sofa to Cart",
//             type: "string",
//         },
//         {
//             name: 'title',
//             title: 'Title',
//             type: 'string',
//           },
//           {
//             name: 'rows',
//             title: 'Rows',
//             type: 'array',
//             of: [
//               {
//                 type: 'object',
//                 fields: [
//                   {
//                     name: 'label',
//                     title: 'Label',
//                     type: 'string',
//                   },
//                   {
//                     name: 'product1',
//                     title: 'Product 1',
//                     type: 'string',
//                   },
//                   {
//                     name: 'product2',
//                     title: 'Product 2',
//                     type: 'string',
//                   },
//                 ],
//               },
//             ],
//           },
//     ]

// }

export default {
    name: "productcomparison",
    title: "Product Comparison",
    type: "document",
    fields: [
      {
        name: "gotoproduct",
        title: "Go to Product",
        type: "string",
      },
      {
        name: "pageformore",
        title: "Page For More",
        type: "string",
      },
      {
        name: "products",
        title: "Products",
        type: "string",
      },
      {
        name: "viewmore",
        title: "View More",
        type: "string",
      },
      {
        name: "sofaoneimage",
        title: "Sofa One Image",
        type: "image",
      },
      {
        name: "asgaardsofa",
        title: "Asgaard Sofa",
        type: "string",
      },
      {
        name: "rsOne",
        title: "Rs. One",
        type: "string",
      },
      {
        name: "reviewsOne",
        title: "Reviews One",
        type: "string",
      },
      {
        name: "sofatwoimage",
        title: "Sofa Two Image",
        type: "image",
      },
      {
        name: "outdoorsofaset",
        title: "Outdoor Sofa Set",
        type: "string",
      },
      {
        name: "rsTwo",
        title: "Rs. Two",
        type: "string",
      },
      {
        name: "reviewsTwo",
        title: "Reviews Two",
        type: "string",
      },
      {
        name: "addProduct",
        title: "Add A Product",
        type: "string",
      },
      {
        name: "chooseProduct",
        title: "Choose a Product",
        type: "string",
      },
      {
        name: "specification",
        title: "Specification",
        type: "string",
      },
      {
        name: "addAsgaardSofaToCart",
        title: "Add Asgaard Sofa to Cart",
        type: "string",
      },
      {
        name: "addOutdoorSofaToCart",
        title: "Add Outdoor Sofa to Cart",
        type: "string",
      },
      {
        name: "sectionsReference",
        title: "Sections Reference",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "sections" }],
          },
        ],
      },
    ],
  };
  