import React from 'react'
import { Button, Flex, useMediaQuery } from '@chakra-ui/react'
import Section from '../Section'

export default function Hero() {
  const [isDesktop] = useMediaQuery('(min-width: 1024px)')
  return (
    <Section
      title='A Simple Bookmark Manager'
      subtitle='A clean and simple interface to organize your favourite websites. Open a new
      browser tab and see your sites load instantly. Try it for free.
    '
      image={'/images/illustration-hero.svg'}
      imageWidth={603}
      imageHeight={389}
      imageAlt='A Simple Bookmark Manager'
    >
      <Flex px={[1, 0]} justifyContent={["center", "flex-start"]} >
        <Button mr={2} boxShadow='lg' fontSize={["16px", "inherit"]} variant='darksolid' size={isDesktop?"lg":"sm"}>
          Get it on Chrome
        </Button>
        <Button boxShadow='lg' fontSize={["16px", "inherit"]} variant='lightsolid' size={isDesktop?"lg":"sm"}>
          Get it on Firefox
        </Button>
      </Flex>
    </Section>
  )
}
