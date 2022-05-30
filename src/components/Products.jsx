import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex,Grid } from "@chakra-ui/react";
const axios = require('axios').default;
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
 let [datas , setdata] = useState([])


 let getdata = async ()=>{
   try {
     let res = await axios.get("http://localhost:8080/products")
     setdata(res.data)
   } catch (error) {
     console.log(error)
   }
 }



 let [postdata ,setpost] = useState([])

 let handlepost = (value)=>{
   axios.post("http://localhost:8080/products",value).then((res)=>{
     setpost([...postdata , res.data])
   })
   
 }
 useEffect(()=>{
  getdata()
 },[postdata])

  return (
    <Flex>
      <AddProduct handlepost={handlepost}/>
      <Grid>
        {datas.map(e=><Product e={e}/>)}
        </Grid>
      <Pagination/>
    </Flex>
  );
};

export default Products;
