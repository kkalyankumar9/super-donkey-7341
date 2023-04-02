import { useState, useEffect } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Stack,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Text,
  Input,
  InputLeftAddon,
  InputGroup,HStack, Box,Button,Link,Spacer,Icon,Image
} from "@chakra-ui/react";
import {Search2Icon  } from '@chakra-ui/icons';
import { FaShoppingCart } from "react-icons/fa";
import { Avatar } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

function FilterComponent() {
  const [items, setItems] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilter, setPriceFilter] = useState(100);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch items and setItems state
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.log(error));
  }, []);

  const filteredItems = items.filter((item) => {
    // Filter by category
    if (categoryFilters.length === 0 || categoryFilters.includes(item.category)) {
      // Filter by price
      return item.price <= priceFilter;
    } else {
      return false;
    }
  }).filter((item) => {
    // Filter by search query
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
 <Box>
  
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

    
    <HStack spacing={4}>
      <CheckboxGroup
        colorScheme="green"
        value={categoryFilters}
        onChange={setCategoryFilters}
      >
        <Stack direction="column">
          <Checkbox value="electronics">Electronics</Checkbox>
          <Checkbox value="clothing">Clothing</Checkbox>
          <Checkbox value="books">Books</Checkbox>
        </Stack>
      </CheckboxGroup>
      <Flex alignItems="center">
        <Text fontSize="sm" mr={2}>Price:</Text>
        <Slider
          aria-label="Price"
          min={0}
          max={100}
          defaultValue={100}
          value={priceFilter}
          onChange={setPriceFilter}
          w="50%"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text fontSize="sm" ml={2}>$ {priceFilter}</Text>
      </Flex>
      <InputGroup>
        <InputLeftAddon children="Search" />
        <Input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </InputGroup>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - {item.category}
          </li>
        ))}
      </ul>
    </HStack>
    </Box>
  );
}

export default FilterComponent;
