import React from 'react'
import { Box, Container, Tabs, Tab, TabList, TabPanels, TabPanel, useMediaQuery } from '@chakra-ui/react'
import TitleSection from '../../molecules/TitleSection'
import Section from '../Section'
export default function Features() {
  return (
    <>
      <Container maxWidth={"xl"} py={6}>
        <Box textAlign="center">
          <TitleSection
            title="Features"
            subtitle='Our aim is to make it quick and easy for you to access your favourite websites.
        Your bookmarks sync between your devices so you can access them on the go.'/>
        </Box>
      </Container>
      <Tabs isFitted variant={"unstyled"} defaultIndex={1}>
        <Box display="flex" flexDirection={"column"}>
          <Container maxWidth={"2xl"} textAlign="center"  >
            <TabList flexDirection={["column","column","row"]} >
              <Tab>Simple Bookmarking</Tab>
              <Tab>Speedy Searching</Tab>
              <Tab>Easy Sharing</Tab>
            </TabList>
          </Container>
          <TabPanels>
            <TabPanel px={0}>
              <Section
                title='Bookmark in one click'
                subtitle='Organize your bookmarks however you like. Our simple drag-and-drop interface
            gives you complete control over how you manage your favourite sites.'
                image={'/images/illustration-features-tab-1.svg'}
                imageWidth={428}
                imageHeight={276}
                imageAlt='Bookmark in one click'
                direction='left'
              />
            </TabPanel>
            <TabPanel px={0}>
              <Section
                title='Intelligent search'
                subtitle='Our powerful search feature will help you find saved sites in no time at all.
              No need to trawl through all of your bookmarks.'
                image={'/images/illustration-features-tab-2.svg'}
                imageWidth={428}
                imageHeight={276}
                imageAlt='Intelligent search'
                direction='left'
              />
            </TabPanel>
            <TabPanel px={0}>
              <Section
                title='Share your bookmarks'
                subtitle='Easily share your bookmarks and collections with others.
              Create a shareable link that you can send at the click of a button.'
                image={'/images/illustration-features-tab-3.svg'}
                imageWidth={428}
                imageHeight={276}
                imageAlt='Share your bookmarks'
                direction='left'
              />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </>
  )
}
