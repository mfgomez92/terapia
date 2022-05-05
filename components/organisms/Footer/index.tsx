import React from 'react'
import { FormControl, Input, FormErrorMessage, Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { IconButton, Spacer } from '@chakra-ui/react'
export default function Footer() {
  return (
    <Container maxWidth={"full"} py={6} bg={"brand.verydarkblue"} >
      <Container maxWidth={"container.xl"} >
        <Flex justifyContent={"space-between"} alignItems={"center"} flexDirection={["column", "column", "row"]}>
          <Flex justifyContent={"space-between"} alignItems={"center"} flexDirection={["column", "column", "row"]} gap={30}>
            <Link href={'/'} passHref>
              <Button
                aria-label='Home'
                variant='ghost'
                width={148}
                height={25}
                minWidth={148}
                p={0}
              >
                <Image
                  src={'/logos/logo-bookmark-footer.svg'} alt='menu' layout='fill'
                />
              </Button>
            </Link>
            <Link href={'/'} passHref>
              <Button variant='link' color={"whiteAlpha.900"} >Features</Button>
            </Link>
            <Link href={'/'} passHref>
              <Button variant='link' color={"whiteAlpha.900"}>Pricing</Button>
            </Link><Link href={'/'} passHref>
              <Button variant='link' color={"whiteAlpha.900"}>Contact</Button>
            </Link>
          </Flex>
          <Spacer />
          <Flex justifyContent={"space-between"} alignItems={"center"} gap={30} py={6}>
            <Link href={'/'} passHref>
              <Button
                aria-label='Home'
                variant='ghost'
                width={35}
                height={35}
                minWidth={35}
                p={0}
              >
                <Image
                  src={'/icons/icon-facebook.svg'} alt='menu' layout='fill'
                />
              </Button>
            </Link>
            <Link href={'/'} passHref>
              <Button
                aria-label='Home'
                variant='ghost'
                width={25}
                height={25}
                minWidth={25}
                p={0}
              >
                <Image
                  src={'/icons/icon-twitter.svg'} alt='menu' layout='fill'
                />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Container>
  )
}
