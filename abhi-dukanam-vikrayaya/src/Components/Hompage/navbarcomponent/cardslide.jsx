




  import React, { useState } from 'react';
import { Grid,VStack, GridItem,Link, Box, Image, Button, Card, HStack, Center, Flex } from '@chakra-ui/react';

const CardSlide = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardData = [
    {
      id: 1,
      name: "Samsung Galaxy M31s",
      description: "The Samsung Galaxy M31s is a smartphone with a 6.5-inch Super AMOLED display, a 64MP quad-camera setup, and a 6000mAh battery.",
      price: 18999,
      image:"https://rukminim1.flixcart.com/image/832/832/k7f34i80/mobile/h/e/4/samsung-galaxy-m31-sm-m315fzbdins-original-imafpnrzfeyrmq8a.jpeg?q=70",
      category: "Smartphones",
      inventory: 50
    },
    {
      id: 2,
      name: "Apple iPhone 12",
      description: "The Apple iPhone 12 is a high-end smartphone with a 6.1-inch Super Retina XDR display, an A14 Bionic chip, and 5G connectivity.",
      price: 79900,
      image: "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70",
      category: "Smartphones",
      inventory: 20
    },
    {
      id: 3,
      name: "OnePlus 8T",
      description: "The OnePlus 8T is a high-performance smartphone with a 6.55-inch Fluid AMOLED display, a quad-camera setup, and Warp Charge 65.",
      price: 42999,
      image: "https://www.saasna.com/224-large_default/oneplus-8t-5g-aquamarine-green-256-gb-12-gb-ram.jpg",
      category: "Smartphones",
      inventory: 30
    },
    {
      id: 4,
      name: "Xiaomi Redmi Note 10S",
     description: "The Xiaomi Redmi Note 10S features a 6.43-inch Super AMOLED display, a quad-camera setup, and the MediaTek Helio G95 chipset.",
      price: 14999,
      image: "https://rukminim1.flixcart.com/image/312/312/kyeqjrk0/mobile/y/u/t/-original-imagan9qzdf2hbgy.jpeg?q=70",
      category: "Smartphones",
      inventory: 40
    },
    {
      id: 5,
      name: "Samsung Galaxy M12",
      description: "The Samsung Galaxy M12 is a budget smartphone with a 6.5-inch HD+ display, a quad-camera setup, and a 5000mAh battery.",
      price: 10999,
      image: "https://rukminim1.flixcart.com/image/312/312/kmwcuq80/mobile/m/1/b/galaxy-m12-galaxy-m12-samsung-original-imagfzunsgwpfgbd.jpeg?q=70",
      category: "Smartphones",
      inventory: 50
    },
    {
      id: 6,
      name: "Realme Narzo 30 Pro 5G",
      description: "The Realme Narzo 30 Pro 5G is a mid-range smartphone with a 6.5-inch IPS LCD display, a triple-camera setup, and a 5000mAh battery.",
      price: 16999,
      image: "https://rukminim1.flixcart.com/image/312/312/klgx0280/mobile/c/c/s/narzo-30-pro-5g-rmx2117-realme-original-imagyhbkbaa5pjb2.jpeg?q=70",
      category: "Smartphones",
      inventory: 25
    },
    {
      id: 7,
      name: "Xiaomi Redmi Note 10 Pro Max",
      description: "The Xiaomi Redmi Note 10 Pro Max is a smartphone with a 6.67-inch Super AMOLED display, a quad-camera setup, and a 5020mAh battery.",
      price: 19999,
      image: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/u/y/5/-original-imaghfn2zmefy8t9.jpeg?q=70",
      category: "Smartphones",
      inventory: 30
    },
    {
      id: 8,
      name: "Apple iPhone SE (2020)",
      description: "The Apple iPhone SE (2020) is a budget smartphone with a 4.7-inch Retina HD display, an A13 Bionic chip, and a 12MP camera.",
      price: 32999,
      image: "https://rukminim1.flixcart.com/image/312/312/j7qi9ow0/mobile/h/f/t/apple-iphone-6s-mn0x2hn-a-original-imaexw7fpbbfwwtw.jpeg?q=70",
      category: "Smartphones",
      inventory: 15
    },
  ];
 

  const cardStyle = {
    width: '300px',
    marginBottom: '20px',
    transition: 'transform 0.2s',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
  };

  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  };

  const handleNextCard = () => {
    if (currentCard === cardData.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCard === 0) {
      setCurrentCard(cardData.length - 1);
    } else {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <HStack bg={"sky blue"} p={"2%"}>
    

    <Card w={"40%"} background={"black"}h={"300px"}>
    <Center>
    <VStack textColor={"black"}>
    <Link  href="/product" >Electronis</Link>
            <Link to="/">Mens</Link>
            <Link to="/">Womens</Link>
            <Link to="/">Kids</Link>
            <Link to="/">Accessories</Link>
            <Link to="/">Furniture</Link>
            <Link to="/">Toys</Link>
            <Link to="/">Cooking items</Link>
            </VStack>
            </Center>

    </Card>
   
    <Box w={"60%"}>
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem colSpan={1}>
        <Button onClick={handlePrevCard} style={buttonStyle}>{"<"}</Button>
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          {cardData.map((card, index) => (
            <Box key={card.title} style={cardStyle}>
              {index === currentCard && (
                <Box style={{ ...cardStyle, ...cardHoverStyle }}>
                    <Box width={"350px"}>
                        <Flex paddingRight={"2%"}>
                  <Image src={card.image} alt={card.title} width={"170px"} h={"300px"}/>
                  <Box className="card-content">
                    <h3>{card.name}</h3>
                    <p>{card.price}</p>
                    <p>{card.description}</p>
                    <Button>Add</Button>

                  </Box>
                  </Flex>
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Button onClick={handleNextCard} style={buttonStyle}>{">"}</Button>
      </GridItem>
      <style jsx>{`
        .card:hover {
          ${cardHoverStyle}
        }
      `}</style>
    </Grid>
    </Box>
    
    </HStack>
  );
};

export default CardSlide;

