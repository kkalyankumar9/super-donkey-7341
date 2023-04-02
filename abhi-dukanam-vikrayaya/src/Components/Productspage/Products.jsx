import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  VStack,
  Text,
    
      Image,Input,
  Grid,Center, HStack,Link,Form,FormControl
} from "@chakra-ui/react";
import axios from "axios"
import FilterComponent from "./fliter";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const PAGE_SIZE = 9; // Number of items per page

const ProductPage = () => {
  const [data, setData] = useState([]); // The full data set
  const [value,setSearch]=useState([])
  const [currentPage, setCurrentPage] = useState(1); // The current page number
  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setData(data);

  };
  useEffect(() => {
    // Fetch data from the server and set it to the `data` state
   
    fetchData();
  }, []);

  // Get the current page of data based on the `currentPage` state
  const currentData = data.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  // Generate an array of page numbers to display in the pagination control
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Event handler for changing the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (item) => {
 

  const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  if (itemInCart) {
    // Item already exists in the cart, update the quantity
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    setCartItems(updatedCartItems);
  } else {
    // Item does not exist in the cart, add it
    const newCartItem = { ...item, quantity: 1 };
    setCartItems([...cartItems, newCartItem]);
  }
};
const handleSearch=async (e)=>{
  e.preventDefault();
  return await axios.get(`http://localhost:8080/products?q=${value}`)
  .then((res)=>{setData(res.data);
    setSearch(" ")

    }  )
    .catch(error=>console.log(error))
}
const handlereset=()=>{
  fetchData();
}
  return (
    <Flex>
    <Box w="100%">
      <Box >
      
        <FormControl onSubmit={handleSearch}>
       <FilterComponent/> 
      <HStack>
      <Input type="text" placeholder="search"onChange={(e)=>e.target.value} w={"300px"}/>
      <Button type="submit" >Search</Button>
      <Button onClick={()=>handlereset()}>Restart</Button>
      </HStack>
      </FormControl>
      

    </Box>
     
      <Box >
    <Box >
      <Center>
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
  {currentData.map((item) => (
    <Box key={item.id}>
      <Center>
        <VStack>
      <Image src={item.image} width={"170px"} h={"300px"} />
      <Text>{item.name}</Text>
      <Text>Rs.{item.price}</Text>
      <Text>{item.description}</Text>
      <Text>{item.category}</Text>
      
      <Button
        onClick={() => handleAddToCart(item)}
        colorScheme="teal"
        mt={2}
      >
        Add to Cart
      </Button>
      </VStack>
      </Center>
    </Box>
  ))}
</Grid>
</Center>


      {/* Render the pagination control */}
      <Flex justify="center" align="center">
        <ButtonGroup isAttached variant="outline" size="md">
          {/* Render a "Previous" button if there is a previous page */}
          {currentPage > 1 && (
            <Button onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </Button>
          )}

          {/* Render a button for each page number */}
          {pageNumbers.map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              colorScheme={pageNumber === currentPage ? "teal" : "gray"}
            >
              {pageNumber}
            </Button>
          ))}

          {/* Render a "Next" button if there is a next page */}
          {currentPage < totalPages && (
            <Button onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </Box>
    </Box>
    <Box bg="red" px={5} py={10}>
      <Flex justify="space-between" direction={["column", "column", "row"]}>
        <Box mr={[0, 0, 10]}>
          <Text fontSize="lg" fontWeight="bold" mb={5}>
            Company
          </Text>
          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Press Releases</Link>
          <Link href="#">Snapdeal Blog</Link>
        </Box>
        <Box mr={[0, 0, 10]}>
          <Text fontSize="lg" fontWeight="bold" mb={5}>
            Help
          </Text>
          <Link href="#">Contact Us</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Warranty</Link>
          <Link href="#">Return Policy</Link>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={5}>
            Follow Us
          </Text>
          <Flex>
            <Link href="#" mr={3}>
              <FaFacebook size={24} />
            </Link>
            <Link href="#" mr={3}>
              <FaTwitter size={24} />
            </Link>
            <Link href="#">
              <FaInstagram size={24} />
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Text mt={10} fontSize="sm" textAlign="center">
        &copy; 2023 Snapdeal.com. All rights reserved.
      </Text>
    </Box>
    
    </Box>
    </Flex>
  );
};

export default ProductPage;

