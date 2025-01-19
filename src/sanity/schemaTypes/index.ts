import { type SchemaTypeDefinition } from "sanity";
import hero from "../lib/funiro/hero";
import browseCard from "../lib/funiro/browse";
import ourproduct from "../lib/funiro/ourproduct";
import inspiration from "../lib/funiro/inspiration";
import share from "../lib/funiro/share";
import navbar from "../lib/funiro/navbar";
import footer from "../lib/funiro/footer";
import shop from "../lib/funiro/shop";
import trophy from "../lib/funiro/trophy";
import nextbutton from "../lib/funiro/nextbutton";
import contact from "../lib/funiro/contact";
import contacthero from "../lib/funiro/SanityHeroFiles/contacthero";
import carthero from "../lib/funiro/SanityHeroFiles/carthero";
import cart from "../lib/funiro/cart";
import singleproduct from "../lib/funiro/singleproduct";
import checkouthero from "../lib/funiro/SanityHeroFiles/checkouthero";
import checkout from "../lib/funiro/checkout";
import bloghero from "../lib/funiro/SanityHeroFiles/bloghero";
import blog from "../lib/funiro/blog";
import comparisonhero from "../lib/funiro/SanityHeroFiles/comparionhero";
import section from "../lib/funiro/section";
import comparison from "../lib/funiro/comparison";
import { product } from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    browseCard,
    ourproduct,
    inspiration,
    share,
    navbar,
    footer,
    shop,
    trophy,
    nextbutton,
    contact,
    contacthero,
    carthero,
    cart,
    singleproduct,
    checkouthero,
    checkout,
    bloghero,
    blog,
    comparisonhero,
    section,
    comparison,
    product,
  ],
};
