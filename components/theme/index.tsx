import { extendTheme } from '@chakra-ui/react'
const colors = {
    brand: {
        softblue: 'hsl(231, 69%, 60%)',
        softred: 'hsl(0, 94%, 66%)',
        grayishblue: 'hsl(229, 8%, 60%)',
        verydarkblue: 'hsl(229, 31%, 21%)',
    },
}
const fonts = {
    body: 'Rubik, system-ui, sans-serif',
    heading: 'Rubik, system-ui, sans-serif',
    mono: 'Menlo, monospace',
}
const fontSizes = {
    xs: "18px"
}

const styles = {
    global: {
        body: {
            bg: 'whiteAlpha.900',
            color: colors.brand.grayishblue,
            fontFamily: fonts.body,
            fontSize: fontSizes.xs,
            padding: 0,
        },

    }
}
const ghost = {
    'ghost': {
        _hover: {
            textDecoration: 'none',
            bg: 'blackAlpha.50',
        },
        _active: {
            bg: 'blackAlpha.50',
            outline: 'none !important',
        },
        _focus: {
            boxShadow: 'none'
        }
    }
}
const link = {
    'link': {
        color: colors.brand.verydarkblue,
        fontWeight: '400',
        _hover: {
            textDecoration: 'none',
            color: colors.brand.softred,
        },
        _active: {
            bg: 'whiteAlpha.500',
            outline: 'none !important',
        },
        _focus: {
            boxShadow: 'none'
        }
    }
}
const solid = {
    'solid': {
        fontWeight: '400',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        bg: colors.brand.softred,
        color: 'whiteAlpha.900',
        border: '3px solid',
        borderColor: colors.brand.softred,
        _hover: {
            bg: 'whiteAlpha.900',
            color: colors.brand.softred,
        },
        _active: {
            bg: 'whiteAlpha.500',
            outline: 'none !important',
        },
        _focus: {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
    }
}
const darksolid = {
    "darksolid": {
        ...solid,
        fontWeight: '400',
        bg: colors.brand.softblue,
        color: 'whiteAlpha.900',
        border: '3px solid',
        borderColor: colors.brand.softblue,
        _hover: {
            bg: 'whiteAlpha.900',
            color: colors.brand.softblue,
        },
        _active: {
            bg: 'whiteAlpha.500',
            outline: 'none !important',
        },
        _focus: {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
    }
}
const lightsolid = {
    "lightsolid": {
        ...solid,
        color: colors.brand.verydarkblue,
        bg: "#F7F7F7",
        border: '3px solid',
        borderColor: "#F7F7F7",
        _hover: {
            borderColor: colors.brand.verydarkblue,
            bg: 'whiteAlpha.500',
        },
        _active: {
            bg: 'whiteAlpha.500',
            outline: 'none !important',
        },
        _focus: {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
    }
}
export const components = {
    Button: {
        variants: {
            ...ghost,
            ...link,
            ...solid,
            ...darksolid,
            ...lightsolid,
        },
    },
    Divider: {
        variants: {
            dotted: {
                margin: '0',
                padding: '0',
                border: '5px',
                borderStyle: 'dotted',
                borderColor: colors.brand.grayishblue,
                borderBottomWidth: "5px"
            },
        },
    },
    Tabs: {
        variants: {
            unstyled: {
                tab: {
                    borderInlineStart: 'none',
                    borderBottom: `2px solid ${colors.brand.grayishblue}`,
                    _hover: {
                        color: colors.brand.softred,
                    },
                    _focus: {
                        fontWeight: 500,
                        color: colors.brand.verydarkblue,
                        boxShadow: 'none',
                        outline: "none",
                        borderBottom: `4px solid ${colors.brand.softred}`,
                    }
                },
            }
        }
    },
}


export const theme = extendTheme({ colors, fonts, fontSizes, styles, components })
