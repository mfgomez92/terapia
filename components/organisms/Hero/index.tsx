import React from 'react'
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Hero() {
  return (
    <Box position={'relative'}>
      <Container maxWidth={"container.xl"} py={12} pr={0} pl={[0, 2]}>
        <Flex justifyContent={"space-between"} gap={25} direction={["column", "column", "row-reverse", "row-reverse"]} >
          <Box width={["100%", "100%", "45%", "lg"]} alignSelf={"center"} order={2} textAlign={["center", "center", "left", "left"]} >
            <Heading as='h1' size='2xl' color='brand.verydarkblue' px={[2, 0]}>
              A Simple Bookmark Manager
            </Heading>
            <Text color='brand.grayishblue' py={6} pr={[0, 6]} px={[2, 0]} >
              A clean and simple interface to organize your favourite websites. Open a new
              browser tab and see your sites load instantly. Try it for free.
            </Text>
            <Flex gap={[15,25]} px={[2, 0]} justifyContent={["center","flex-start"]} >
              <Button boxShadow='lg' fontSize={["16px","inherit" ]} variant='darksolid' size={'lg'} mr={[1, 4]}>
                Get it on Chrome
              </Button>
              <Button boxShadow='lg' fontSize={["16px","inherit" ]} variant='lightsolid' size='lg'>
                Get it on Firefox
              </Button>
            </Flex>
          </Box>
          <Image src={'/images/illustration-hero.svg'} layout="intrinsic" alt={"menu"} width={657} height={466} />
        </Flex>
      </Container>
      <Box position={'absolute'}
        backgroundColor={'brand.softblue'}
        right={0}
        top={["10%", "15%", "30%"]}
        height={["30%", "38%", "60%"]}
        width={["70%", "50%", "30%", "30%"]}
        borderLeftRadius={'full'}
        zIndex={-1} />
    </Box>
  )
}
