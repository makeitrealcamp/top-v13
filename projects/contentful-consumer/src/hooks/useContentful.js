import React from "react";
import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "urd10tvlmnck",
    accessToken: "sXf2HaNFYoFHqSDEd9xV5Uy9U1Br7b45Nn5vkpPeFrI",
    host: "preview.contentful.com",
  });

  const getArticles = async () => {
    try {
      const articles = await client.getEntries({
        content_type: "articles",
      });
      const { items } = articles;
      const sanitizedData = items.map((item) => {
        const img = item.fields.image.fields;
        return {
          ...item.fields,
          image: img,
        };
      });
      return sanitizedData;
    } catch (error) {
      console.error(error);
    }
  };

  return { getArticles };
};

export default useContentful;
