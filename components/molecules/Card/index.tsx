import React from 'react'
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface CardsProps {
    title: string
    desc: string
    logo: string
    align: 'flex-start' | 'center' | 'flex-end'
}
export default function Card({ title, desc, logo, align }: CardsProps) {
    return (
        <Box height={"370px"} display={"flex"} alignSelf={["center","center",align]} flexDirection="column" alignItems={"center"} justifyContent={"space-between"} shadow='md' borderRadius={"xl"}pt="3">
            <Box width={100} height={100} position={"relative"}>
                <Image src={`/logos/logo-${logo}.svg`} layout="fill" alt={""} />
            </Box>
            <Heading pt={5} fontSize='xl'color={"brand.verydarkblue"} >{title}</Heading>
            <Text pb={5} fontSize={'15px'}>{desc}</Text>
            <Divider variant={"dotted"} />
            <Box p={5}>
                <Button variant='darksolid'>
                    Add & Install Extension
                </Button>
            </Box>
        </Box>
    )
}