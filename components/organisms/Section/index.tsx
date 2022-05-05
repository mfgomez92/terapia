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
        <Box position={'relative'} as="section">
            <Container maxWidth={"container.xl"} py={12}>
                <Flex justifyContent={"space-between"} alignItems={"center"} gap={25} height={"auto"} direction={["column", "column", "row", "row"]} >
                    <Image src={image} alt={imageAlt} layout={"fixed"} width={!isMobile ? imageWidth : imageWidth * 2} height={!isMobile ? imageHeight : imageHeight * 2} />
                    <Box width={["100%", "100%", "45%", "lg"]} alignSelf={"center"} textAlign={["center", "center", "left", "left"]} >
                        <TitleSection
                            title={title}
                            subtitle={subtitle}
                        />
                        <Button variant={buttonVariant} onClick={buttonOnClick}>
                            {buttonLabel}
                        </Button>
                    </Box>
                </Flex>
            </Container>
            <Box position={'absolute'}
                backgroundColor={'brand.softblue'}
                left={0}
                top={["15%", "40%", "40%"]}
                height={["25%", "38%", "60%"]}
                width={["70%", "50%", "30%", "30%"]}
                borderRightRadius={'full'}
                zIndex={-1} />
        </Box>
    )
}
