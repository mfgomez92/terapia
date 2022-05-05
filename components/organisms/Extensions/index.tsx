import React from 'react'
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import TitleSection from '../../molecules/TitleSection'

interface FeaturesProps {
  title: string
  desc: string
  logo: string
}
function Feature({ title, desc, logo }: FeaturesProps) {
  return (
    <Box p={5} display={"flex"} flexDirection="column" alignItems={"center"} shadow='md' borderWidth='1px' borderRadius={"xl"}>
      <Box width={100} height={100} position={"relative"}>
        <Image src={`/logos/logo-${logo}.svg`} layout="fill" alt={""} />
      </Box>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
      <Button variant='darksolid' mt={6}>
        Add & Install Extension
      </Button>
    </Box>
  )
}
export default function Extensions() {
  return (
    <>
      <Container maxWidth={"xl"} py={6}>
        <Box textAlign="center">
          <TitleSection
            title="Download the extension"
            subtitle='We’ve got more browsers in the pipeline. Please do let us know if you’ve
            got a favourite you’d like us to prioritize.'/>
        </Box>
      </Container>
      <Container maxWidth={"3xl"} textAlign="center" >
        <Flex justifyContent={"space-between"} gap={25} direction={["column", "column", "column", "row"]} >
          <Feature title="Add to Chrome" desc="Minimum version 62" logo='chrome' />
          <Feature title="Add to Firefox" desc="Minimum version 55" logo='firefox' />
          <Feature title="Add to Opera" desc="Minimum version 46" logo='opera' />
        </Flex>
      </Container>
    </>
  )
}
