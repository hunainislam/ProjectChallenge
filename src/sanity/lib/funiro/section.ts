export default {
  name: "sections",
  title: "Sections",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "product1",
              title: "Product 1",
              type: "string",
            },
            {
              name: "product2",
              title: "Product 2",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
