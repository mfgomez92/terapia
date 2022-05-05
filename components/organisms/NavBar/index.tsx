import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Container, Flex, IconButton, Spacer } from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Container maxWidth={"container.xl"} py={12}>
      <Flex justifyContent={"space-between"}>
        <Link href={'/'} passHref>
          < IconButton
            aria-label='Home'
            variant='ghost'
            icon={<Image
              src={'/logos/logo-bookmark.svg'} alt='menu'
              width={148}
              height={25} />}
          />
        </Link>
        <Spacer />
        <Box w='28rem' h='10' display={['flex', 'flex', 'block', 'block']} justifyContent={'flex-end'}>
          <Flex justifyContent={"space-between"} display={['none', 'none', 'flex', 'flex']}>
            <Link href={'/'} passHref>
              <Button variant='link'>Features</Button>
            </Link>
            <Link href={'/'} passHref>
              <Button variant='link'>Pricing</Button>
            </Link><Link href={'/'} passHref>
              <Button variant='link'>Contact</Button>
            </Link>
            <Button variant='solid'>Login</Button>
          </Flex>
          < IconButton
            aria-label='Open Menu'
            variant='ghost'
            display={['flex', 'flex', 'none', 'none']}
            icon={<Image
              src={'/icons/icon-hamburger.svg'} alt='menu'
              height={30}
              width={30} />}
          />
        </Box>
      </Flex>
    </Container>
  )
}
