import React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import TitleSection from '../../molecules/TitleSection'
import Card from "../../molecules/Card"
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
        <Flex height={["auto","auto","auto","500px"]} justifyContent={"space-between"} gap={25} direction={["column", "column", "row", "row"]} >
          <Card title="Add to Chrome" desc="Minimum version 62" logo='chrome' align='flex-start' />
          <Card title="Add to Firefox" desc="Minimum version 55" logo='firefox' align='center' />
          <Card title="Add to Opera" desc="Minimum version 46" logo='opera' align='flex-end' />
        </Flex>
      </Container>
    </>
  )
}
