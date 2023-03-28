import { 
    Box,
    Flex,
    Text,
    Link,    
    Spacer,
    HStack,
    Image,
    Input,
    Button,
    Icon
    
} from '@chakra-ui/react'

import {Search2Icon  } from '@chakra-ui/icons';
import { FaShoppingCart } from "react-icons/fa";
import { Avatar } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import Register from './Registration';
import Login from './SignIn';

function Navbars() {
    return (<Box>
        {/* line1 */}
        <Box maxWidth={"100%"} bg="red"  height="30px" alignItems={"center"}>
                    <Flex  >
                        <Box marginLeft={"30px"} marginRight={"100PX"}  color="white" maxWidth="max-content">
                            <Text>Brand Waali Quality, Bazaar Waali Deal!</Text>
                        </Box>
                        <Spacer/>
                        <Box   display="flex" marginLeft={"40PX"} marginRight={"20px"} >
                            <Link href="/" color="white" mx={2}>Impact@Sanpdeal</Link>
                            <Link href="/" color="white" mx={2}>Gift Cards</Link>
                            <Link href="/" color="white" mx={2}>Help Center</Link>
                            <Link href="/" color="white" mx={2}>Sell On Sanpdeal</Link>
                            <Link href="/" color="white" mx={2}>Download App</Link>
                        </Box>
                    </Flex>
        </Box>
        {/* navbar  */}
        <Box bg=" #e40046">
            <HStack>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhHzg2jblKK8pLWO2MQ3_jWM_0K09Kk-Oa3uaE4Fm&s' alt="error"/>
                <HStack>
                    <Input type="text" placeholder="Search products & brands"/>
                    <Button><Search2Icon boxSize={6}/></Button>
                </HStack>
                <Box>
                    <text>Cart</text>
                <Icon as={FaShoppingCart} boxSize={6} />
                </Box>
                <Box>
                <Link path="/login" title="login">Signin</Link>

                <Avatar icon={<FaUser />} />
                </Box>
            </HStack>

        </Box>
        <Register/>
         <Login/>
        

        </Box>
    );
}

export default Navbars;
