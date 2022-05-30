import React, { useRef, useState } from "react";
import { Button,Modal, ModalBody,Input,Select,RadioGroup,Radio, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel} from "@chakra-ui/react";
const AddProduct = ({handlepost}) => {
  // TODO: Remove below const and instead import them from chakra
const [form_data , setformdata] = useState({})

const {isOpen , onOpen , onClose} = useDisclosure()
const finalRef = useRef()

let [add , adddata] = useState({})
console.log(add)
  const handelChange = (e) => {
    let { checked, type, name, value, files } = e.target;
    if (type === "checkbox") {
       adddata({
        ...add ,
        [name]: checked,
      });
    } else if (type === "file") {
       adddata({
        ...add ,
        [name]: files,
      });
    } else {
       adddata({
        ...add,
        [name]: value,
      });
    }
   
  };

 const submitdata = (e)=>{
   e.preventDefault()
   handlepost({...add , imageSrc :"https://picsum.photos/seed/picsum3/420/260" , gender:"Male"})
   onClose()
 }

  return (
    <>
      <Button tabIndex={-1} my={4} data-cy="add-product-button" onClick={onOpen}>ADD Products</Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay></ModalOverlay>
        <ModalContent>
        <ModalHeader>ADD New Product</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Ttile</FormLabel>
          <Input data-cy="add-product-title" 
          ref={finalRef} placeholder="Tile" name="title" onChange={handelChange}/>
          <FormLabel>Category</FormLabel>
          <Select name="category" data-cy="add-product-category" placeholder="category" onChange={handelChange}>
            <option value="shirt" data-cy="add-product-category-shirt">Shirt</option>
            <option value="pant" data-cy="add-product-category-pant">Pant</option>
            <option value="jeans" data-cy="add-product-category-jeans">Jeans</option>
          </Select>
           <FormLabel>Gender</FormLabel>
          <RadioGroup  name="gender" data-cy="add-product-gender">
            <Radio value="male" data-cy="add-product-gender-male">Male</Radio>
            <Radio value="female" data-cy="add-product-gender-female">Female</Radio>
            <Radio value="unisex" data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
         <FormLabel>Price</FormLabel>
          <Input type="number" data-cy="add-product-price" name="price" onChange={handelChange} placeholder="Rs. Price"/>
          <Button data-cy="add-product-submit-button" onClick={submitdata}>Create</Button>
          </FormControl>
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
