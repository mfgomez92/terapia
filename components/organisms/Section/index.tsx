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
    direction?: 'left' | 'right'
    children?: React.ReactNode
}

export default function Section(props: Props) {
    const { children, direction = "right", title, subtitle, image, imageWidth, imageHeight, imageAlt, buttonLabel = "More Info", buttonVariant = "darksolid", buttonOnClick = () => { } } = props
    const [isDesktop] = useMediaQuery('(min-width: 1024px)')
    const [isMobile] = useMediaQuery('(max-width: 768px)')
    return (
        <Flex
        {...(isDesktop? { gap: 45 }: isMobile && {gap:20} )}
            py={5}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={direction === 'left' ? ["column", "column", 'row'] : ["column", "column", "row-reverse"]}
            width={"100%"}>
            <Box
                px={5}
                position={'relative'}
                height={"auto"}
                width={["100%", "100%", "50%"]}
                display={"flex"}
                justifyContent={direction === "left" ? ["center", "flex-end"] : ["center", "flex-start"]}
            >
                <Image
                    src={image}
                    alt={imageAlt}
                    layout="fixed"
                    width={isDesktop ? imageWidth : imageWidth * .7}
                    height={isDesktop ? imageHeight : imageHeight * .7}
                />
                <Box
                    position={'absolute'}
                    backgroundColor={'brand.softblue'}
                    bottom={0}
                    height={["35%", "60%"]}
                    width={"70%"}
                    {...(direction === "left" ? { left: 0 } : { right: 0 })}
                    {...(direction === "left" ? { borderRightRadius: 'full' } : { borderLeftRadius: 'full' })}

                    zIndex={-1}
                />
            </Box>
            <Box as='div' px={5} width={["100%", "100%", "50%"]} display={"flex"} justifyContent={"center"} >
                <Box maxWidth={'sm'} textAlign={["center", "left"]} >
                    <TitleSection
                        title={title}
                        subtitle={subtitle}
                    />
                    {children ? children : <Button variant={buttonVariant} onClick={buttonOnClick}>
                        {buttonLabel}
                    </Button>}
                </Box>
            </Box>
        </Flex>
    )
}
