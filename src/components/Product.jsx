import React from "react";
import { Text,Image,Box ,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react";
const Product = ({e}) => {
  // TODO: Remove below const and instead import them from chakra
  
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={e.imageSrc}/>
      <Text data-cy="product-category">{e.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{e.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{e.title}</Heading>
      <Box data-cy="product-price">{e.price}</Box>
    </Stack>
  );
};

export default Product;
// category: "pant"
// gender: "male"
// id: 1
// imageSrc: "https://picsum.photos/seed/picsum6/420/260"
// price: "23.00"
// title: "react tshirt"