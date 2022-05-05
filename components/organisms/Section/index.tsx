import React from 'react'
import { Box, Button, Container, Flex } from '@chakra-ui/react'
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
    const { title, subtitle, image, imageWidth, imageHeight, imageAlt, buttonLabel="More Info", buttonVariant = "darksolid", buttonOnClick=() => { } } = props
    return (
        <Box position={'relative'} as="section">
            <Container maxWidth={"container.xl"} py={12} pr={0}>
                <Flex justifyContent={"space-between"} gap={25} direction={["column", "column", "row", "row"]} >
                    <Image src={image} layout="intrinsic" alt={imageAlt} width={imageWidth} height={imageHeight} />
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
                height={["30%", "38%", "60%"]}
                width={["70%", "50%", "30%", "30%"]}
                borderRightRadius={'full'}
                zIndex={-1} />
        </Box>
    )
}
