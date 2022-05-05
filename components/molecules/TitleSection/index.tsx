import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
interface Props {
    title: string
    subtitle: string
}

export default function TitleSection(props: Props) {
    const { title, subtitle } = props

    return (
        <>
            <Heading as='h3' color='brand.verydarkblue'>
                {title}
            </Heading>
            <Text color='brand.grayishblue' py={6}>
                {subtitle}
            </Text>
        </>

    )
}
