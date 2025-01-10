import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "n8h2jnz1",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-29",
  useCdn: process.env.NODE_ENV === "production", // Use CDN in production
  token: process.env.SANITY_API_TOKEN, // Use non-public variable for sensitive tokens
});

// Validate required environment variables
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("Sanity Project ID is missing in environment variables");
}

if (!process.env.SANITY_API_TOKEN) {
  console.warn(
    "Warning: Sanity API token is not set, restricted access to Sanity APIs."
  );
}
