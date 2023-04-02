import { 
    Box,
    Flex,
    Text,
      
    Spacer,
    HStack,
    Image,
    Input,
    Button,
    Icon,
    Heading,
    Center,
 
    VStack,
    Card
    
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import navbar from "./navbar.css"
 
import {Search2Icon  } from '@chakra-ui/icons';
import { FaShoppingCart } from "react-icons/fa";
import { Avatar } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ImageSlider from './navbarcomponent/sliderposter';
import CardSlide from './navbarcomponent/cardslide';
import ProductList from '../Cartpage/prod';


function Navbars() {
    return (<Box p={"2px"}>
        {/* line1 */}
      
     
        <Box maxWidth="100%" bg="red" height="30px" alignItems="center">
        <Flex>
          <Box marginLeft="30px" marginRight="100px" color="white" maxWidth="max-content">
            <Text>Brand Waali Quality, Bazaar Waali Deal!</Text>
          </Box>
          <Spacer />
          <Box display="flex" marginLeft="40px" marginRight="20px">
            <Link href="/" color="white" mx={2}>
              Impact@Sanpdeal
            </Link>
            <Link href="/" color="white" mx={2}>
              Gift Cards
            </Link>
            <Link href="/" color="white" mx={2}>
              Help Center
            </Link>
            <Link href="/" color="white" mx={2}>
              Impact@Sanpdeal
            </Link>
            <Link href="/" color="white" mx={2}>
              Download App
            </Link>
          </Box>
        </Flex>
      </Box>

      {/* navbar */}
      <Box bg="#e40046" py={2}>
      <Flex alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        {/* Logo */}
        <Link href="/" display="flex" alignItems="center">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhHzg2jblKK8pLWO2MQ3_jWM_0K09Kk-Oa3uaE4Fm&s" alt="logo" w="200px" />
        </Link>

        {/* Search bar */}
        <HStack>
          <Input type="text" placeholder="Search products & brands" width="400px" />
          <Button leftIcon={<Search2Icon boxSize={6} />} bg="white" color="#e40046" _hover={{ bg: "white" }}>
            Search
          </Button>
        </HStack>

        {/* Cart and Login */}
        <Flex alignItems="center">
          <Link to="/cart" title="Cart" mx={4}>
            <HStack>
              <Icon as={FaShoppingCart} boxSize={6} />
              <Text fontSize="lg" fontWeight="semibold" color="white">
                Cart
              </Text>
            </HStack>
          </Link>
          <Link to="/login" title="Login">
            <HStack>
              <Avatar icon={<FaUser />} bg="white" color="#e40046" />
              <Text fontSize="lg" fontWeight="semibold" color="white">
                Sign In
              </Text>
            </HStack>
          </Link>
        </Flex>
      </Flex>
    </Box>
        <Box className='con1'>
            
            
         </Box>
         <ImageSlider/>
         <CardSlide/>

        {/* Footer part */}
        <Box bg="white" paddingBottom={"50px"}>
            <HStack>
            <Box maxWidth={"50%"}>
                <Image src="https://i2.sdlcdn.com/img/appScreenshot@2x.png" alt="error" />
                <Image src=""></Image>
            </Box>
            
            <Box>
            <VStack>
            <Heading>Download Snapdeal App Now</Heading>
            <Text>Fast, Simple & Delightful.

All it takes is 30 seconds to Download.</Text>
            
                <HStack>
                <Image src="https://cdn.dribbble.com/users/6410/screenshots/1755957/app-download-buttons.png"></Image>
                </HStack>
                </VStack>
                </Box>
                </HStack>
              </Box>
              {/* footer */}
        <Box>
        <Box >
      <Card>
        <HStack>
          <Center>
            <Card h={"250px"}>
              <Image
                src="https://img.freepik.com/premium-vector/100-secure-logo-secure-badge-design-secure-vector-icons-secure-payments_526569-743.jpg?w=2000"
                w={"30"}
                h="40"
              />
              
              <Text textAlign={"center"}>100% SECURE PAYMENTS</Text>
              <Text textAlign={"center"}>Moving your card details to a much more secured place</Text>
            </Card>

            <Card h={"250px"}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KcIQlf86zKl-iF2IYozWh48LLYpGo15LL5T7ahWQFw&s"
                w={"30"}
                h="40"
              />
              <Text textAlign={"center"}>TRUSTPAY</Text>
              <Text textAlign={"center"}>100% payment Protection Easy Return policy</Text>
            </Card>

            <Card h={"250px"}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfK-3FoIzHmrimA9G-Axmr4l9XSefG8MJoRV7eM-u5CQ&s"
                w={"30"}
                h={"40"}
              />
              <Text textAlign={"center"}>HELP CENTER</Text>
              <Text textAlign={"center"}>Got a question? Look no further. Browse our FAQs or submit your query here.</Text>
            </Card>

            <Card h={"250px"}>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4477/4477610.png"
                w={"100"}
                h="158"
              />
              <Text textAlign={"center"}>SHOP ON THE GO</Text>
              <Text textAlign={"center"}>Download the app and get exciting app-only offers at your fingertips.</Text>
            </Card>
          </Center>
        </HStack>
      </Card>
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
       
        </Box>
        
    );
}

export default Navbars;

