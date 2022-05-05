import React from 'react'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
export default function FAQ() {
  return (
    <>
      <Container maxWidth={"xl"} py={24} textAlign="center">
        <Box >
          <Heading as='h3' color='brand.verydarkblue'>
            Frequently Asked Questions
          </Heading>
          <Text color='brand.grayishblue' py={6}>
            Here are some of our FAQs. If you have any other questions you’d like
            answered please feel free to email us.
          </Text>
        </Box>
        <Accordion py={6}>
          <AccordionItem>
            <AccordionButton >
              <Heading _hover={{color:"brand.softred"}} as="h6" fontSize={"lg"} color={"brand.verydarkblue"} fontWeight={500} flex='1' textAlign='left'>
                What is Bookmark?
              </Heading>
              <Button
                aria-label='Home'
                variant='ghost'
                p={0}
              >
                <Image
                  src={'/icons/icon-arrow.svg'} alt='menu' layout='fixed' width={18}
                  height={12}
                />
              </Button>
            </AccordionButton>
            <AccordionPanel pb={4} textAlign={"left"} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
              justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Heading _hover={{color:"brand.softred"}} as="h6" fontSize={"lg"} color={"brand.verydarkblue"} fontWeight={500} flex='1' textAlign='left'>
                How can I request a new browser?
              </Heading>
              <Button
                aria-label='Home'
                variant='ghost'
                p={0}
              >
                <Image
                  src={'/icons/icon-arrow.svg'} alt='menu' layout='fixed' width={18}
                  height={12}
                />
              </Button>
            </AccordionButton>
            <AccordionPanel pb={4} textAlign={"left"} >
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
              ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
              Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Heading _hover={{color:"brand.softred"}} as="h6" fontSize={"lg"} color={"brand.verydarkblue"} fontWeight={500} flex='1' textAlign='left'>
                Is there a mobile app?
              </Heading>
              <Button
                aria-label='Home'
                variant='ghost'
                p={0}
              >
                <Image
                  src={'/icons/icon-arrow.svg'} alt='menu' layout='fixed' width={18}
                  height={12}
                />
              </Button>
            </AccordionButton>
            <AccordionPanel pb={4} textAlign={"left"} >
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
              urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Heading _hover={{color:"brand.softred"}} as="h6" fontSize={"lg"} color={"brand.verydarkblue"} fontWeight={500} flex='1' textAlign='left'>
                What about other Chromium browsers?
              </Heading>

              <Button
                aria-label='Home'
                variant='ghost'
                p={0}
              >
                <Image
                  src={'/icons/icon-arrow.svg'} alt='menu' layout='fixed' width={18}
                  height={12}
                />
              </Button>
            </AccordionButton>
            <AccordionPanel pb={4} textAlign={"left"} >
              Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
              vitae neque eget nisl gravida pellentesque non ut velit.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button variant='darksolid'>
          More Info
        </Button>
      </Container>
    </>
  )
}
