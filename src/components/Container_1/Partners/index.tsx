import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { partners } from "./data";
import { CallToActionButton } from "../../CallToActionButton";


export function Partners() {

    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
    })

    return (

        <Flex
            w='100%'
            bgColor={'light.400'}
            color={'dark.400'}

            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}

            position={'relative'}

            px={[0, 0, 0, 20, 20]}
            py={[8, 8, 8, 20, 20]}
        >

            <Flex flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']} w='100%' justifyContent={'space-between'} gap={[4, 4, 4, 0, 0]}>



                {isMobile ?
                    <>
                        <CallToActionButton width={"90%"} mx='auto' title="Agende seu diagnóstico" />

                        <Flex flexDir={'row'} mx='auto' gap={4} p={8}>

                            {/* LINHA 1 */}
                            <Flex flexDir={'column'} borderRight={'1px solid #E5E5E555'}>
                                <Image objectFit={'contain'} objectPosition={'center'} src={partners[1].marca} borderBottom={'1px solid #E5E5E555'} py={2} h='100%' />
                                <Image objectFit={'contain'} objectPosition={'center'} src={partners[6].marca} borderBottom={'1px solid #E5E5E555'} py={2} h='100%' />
                                <Image objectFit={'contain'} objectPosition={'center'} src={partners[5].marca} borderBottom={'1px solid #E5E5E555'} py={2} h='100%' />
                                <Image objectFit={'contain'} objectPosition={'center'} src={partners[4].marca} borderBottom={'1px solid #E5E5E555'} py={2} h='100%' />
                            </Flex>

                            {/* LINHA 2 */}
                            <Flex flexDir={'column'} >
                                <Image objectFit={'contain'} objectPosition={'center'} src={partners[0].marca} borderBottom={'1px solid #E5E5E555'} py={2} h='100%' />
                                <Image objectFit={'contain'} objectPosition={'center'} src={partners[2].marca} borderBottom={'1px solid #E5E5E555'} py={2} h='100%' />
                                <Image objectFit={'contain'} objectPosition={'center'} src={partners[3].marca} py={2} h='100%' />
                            </Flex>

                        </Flex>
                    </>
                    :
                    // MARCAS DESKTOP
                    < Flex flexDir={'column'} w='max' gap={4}>

                        {/* LINHA 1 */}
                        <Flex borderBottom={'1px solid #E5E5E555'} gap={8}>
                            <Image objectFit={'contain'} objectPosition={'center'} src={partners[4].marca} borderRight={'1px solid #E5E5E555'} py={2} />
                            <Image objectFit={'contain'} objectPosition={'center'} src={partners[6].marca} py={2} />
                        </Flex>

                        {/* LINHA 2 */}
                        <Flex borderBottom={'1px solid #E5E5E555'} gap={8}>
                            <Image objectFit={'contain'} objectPosition={'center'} src={partners[5].marca} borderLeft={'1px solid #E5E5E555'} py={2} />
                            <Image objectFit={'contain'} objectPosition={'center'} src={partners[1].marca} borderRight={'1px solid #E5E5E555'} py={2} />
                        </Flex>

                        {/* LINHA 3 */}
                        <Flex borderBottom={'1px solid #E5E5E555'} gap={8}>
                            <Image objectFit={'contain'} objectPosition={'center'} src={partners[2].marca} py={2} />
                            <Image objectFit={'contain'} objectPosition={'center'} src={partners[0].marca} borderLeft={'1px solid #E5E5E555'} py={2} />
                            <Image objectFit={'contain'} objectPosition={'center'} src={partners[3].marca} borderRight={'1px solid #E5E5E555'} py={2} />
                        </Flex>

                    </Flex>
                }

                {/* CARD TITLE */}
                <Flex
                    w={['max', 'max', 'max', 'min', 'min']}
                    fontWeight={700}
                    fontSize={['1.35rem', '1.35rem', '1.35rem', '2.25rem', '2.25rem']}
                    fontFamily={'Noto Serif'}
                    flexDir={'column'}
                    gap={16}
                >
                    <Text
                        mt='auto'
                        ml={6}
                        pl={[4]}
                        pr={[0, 0, 0, 8, 8]}
                        borderLeft={['4px solid #EF4444', '4px solid #EF4444', '4px solid #EF4444', '4px solid #EF4444', '4px solid #EF4444']}
                    >
                        Marcas que atendemos
                    </Text>
                    {isMobile ?
                        ''
                        :
                        <CallToActionButton width={"350px"} title="Agende seu diagnóstico" />
                    }
                </Flex>
            </Flex>


        </Flex >
    )
}