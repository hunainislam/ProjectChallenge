export default {
    name: "cart",
    title: "Cart",
    type: "document",
    fields: [
        {
            name: "product",
            title: "Product",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            type: "string",
        },
        {
            name: "quantity",
            title: "Quantity",
            type: "string",
        },
        {
            name: "subtotal",
            title: "Subtotal",
            type: "string",
        },
        {
            name: "deleteimage",
            title: "Delete Image",
            type: "image",
        },
        {
            name: "carttotal",
            title: "Cart Total",
            type: "string",
        },
        {
            name: "subtotaltext",
            title: "Subtotal Text",
            type: "string",
        },
        {
            name: "total",
            title: "Total",
            type: "string",
        },
        {
            name: "checkout",
            title: "Checkout",
            type: "string",
        }
    ]
}