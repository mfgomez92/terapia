import React from 'react'
import { Box, Button, Container, Flex, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import TitleSection from '../../molecules/TitleSection'

interface Props {
    title: string
    subtitle: string
    image: string
    imageWidth: number
    imageHeight: number
    imageAlt: string
    buttonLabel?: string
    buttonVariant?: string
    buttonOnClick?: () => void
}

export default function Section(props: Props) {
    const { title, subtitle, image, imageWidth, imageHeight, imageAlt, buttonLabel = "More Info", buttonVariant = "darksolid", buttonOnClick = () => { } } = props
    const [isMobile] = useMediaQuery('(min-width: 768px)')
    return (
        <Flex
            gap={15}
            py={5}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={["column", "column", "row"]}
            width={"100%"}>
            <Box
                px={5}
                position={'relative'}
                height={["30vh", "30vh", "50vh"]}
                width={["100%", "100%", "50%"]}
                display={"flex"}
                justifyContent={["center", "flex-end"]}
            >
                <Image
                    src={image}
                    alt={imageAlt}
                    layout="fixed"
                    width={!isMobile ? imageWidth : imageWidth * 1.5}
                    height={!isMobile ? imageHeight : imageHeight * 1.5}
                />
                <Box
                    position={'absolute'}
                    backgroundColor={'brand.softblue'}
                    left={0}
                    bottom={0}
                    height={["35%", "45%"]}
                    width={"70%"}
                    borderRightRadius={'full'}
                    zIndex={-1}
                />
            </Box>
            <Box as='div' px={5} width={["100%", "100%", "50%"]}>
                <Box maxWidth={'md'} textAlign={["center", "left"]} >
                <TitleSection
                    title={title}
                    subtitle={subtitle}
                />
                <Button variant={buttonVariant} onClick={buttonOnClick}>
                    {buttonLabel}
                </Button>
                </Box>
            </Box>
        </Flex>
    )
}
