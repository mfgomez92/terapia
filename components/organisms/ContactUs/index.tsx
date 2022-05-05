import React from 'react'
import { Box,  Container,  Heading, Text, useMediaQuery } from '@chakra-ui/react'
import ContactInput from '../../molecules/ContactInput';

export default function ContactUs() {
  const [isMobile] = useMediaQuery('(min-width: 768px)')
  return (
    <Container maxWidth={"full"} bg={"brand.softblue"} >
      <Container maxWidth={"xl"}>
        <Box textAlign="center">
          <Text letterSpacing={2} fontSize={!isMobile?"sm":"md"} color='whiteAlpha.900' pt={12} >
            35,000+ ALREADY JOINED
          </Text>
          <Heading as='h5' color='whiteAlpha.900' fontSize={!isMobile?"xl":"4xl"}py={6}>
            Stay up-to-date with what we’re doing
          </Heading>
          <ContactInput/>
        </Box>
      </Container>
    </Container>

  )
}
