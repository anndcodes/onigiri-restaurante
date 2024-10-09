import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { carouselFeedbacks } from "./data";
import { useState } from "react";
import { CarouselCard } from "./carouselCard";

export function Feedbacks() {

    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false
    })


    const [carouselIndex, setCarouselIndex] = useState(1)


    const carouselLength = carouselFeedbacks.length
    const [carouselBarSize, setCarouselBarSize] = useState(100 / carouselLength)


    return (
        // CONTAINER PRINCIPAL
        <Flex
            w='100%'
            bgColor={'dark.400'}
            color={'light.400'}

            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}

            position={'relative'}

            px={[0, 0, 0, 20, 20]}
            py={[8, 8, 8, 20, 20]}

        >
            <>
                {isMobile ?
                    <Image
                        right={0}
                        top={0}
                        w={'100px'}
                        position={'absolute'}
                        src='static/img/container_1/servicesSection/dots/square-dots-mobile.png'
                    />
                    :
                    <Image
                        left={2}
                        bottom={0}
                        w={'400px'}
                        position={'absolute'}
                        src='static/img/container_1/servicesSection/dots/square-dots.png'
                    />
                }
            </>

            {/* Container principal com as duas linhas de cards */}
            <Flex
                w='100%'
                flexDir={'column'}
                gap={12}
                zIndex={1}
                maxW={['80vw', '80vw', '80vw', 'initial', 'initial']}
            >


                {/* Linha 1 de title e google */}
                <Flex w='100%' flexDir={['column', 'column', 'column', 'row', 'row']} justifyContent={'space-between'} gap={8}>

                    {/* TITLE */}
                    <Flex
                        w='100%'
                        fontWeight={700}
                        fontSize={['1.35rem', '1.35rem', '1.35rem', '2.25rem', '2.25rem']}
                        fontFamily={'Noto Serif'}
                    >
                        <Text
                            pl={[4, 4, 4, 8, 8]}
                            pr={24}
                            mt='auto'
                            borderLeft={['4px solid #EF4444', '0', '0', '4px solid #EF4444', '4px solid #EF4444']}
                        >
                            O que nossos clientes estão dizendo
                        </Text>
                    </Flex>

                    {/* Google */}
                    <Flex flexDir='column'>
                        {/* ICON GOOGLE */}
                        <Flex flexDir={'row'} alignItems={'center'} gap={8}>
                            <Flex>
                                <Image src='static/img/container_1/feedbacks/google.png' />

                            </Flex>
                            <Flex flexDir='column' gap={2}>
                                <Flex>
                                    <Image src='static/img/container_1/feedbacks/excelent.png' />
                                </Flex>
                                <Flex ml='auto'>
                                    <Image boxSize={4} src='static/img/container_1/feedbacks/star.png' />
                                    <Image boxSize={4} src='static/img/container_1/feedbacks/star.png' />
                                    <Image boxSize={4} src='static/img/container_1/feedbacks/star.png' />
                                    <Image boxSize={4} src='static/img/container_1/feedbacks/star.png' />
                                    <Image boxSize={4} src='static/img/container_1/feedbacks/star.png' />
                                </Flex>
                            </Flex>
                        </Flex>

                        {/* BARRA DE CAROUSEL */}
                        <Flex gap={4}>
                            <Box
                                bgColor="rgba(254, 254, 254, 0.40)"
                                borderRadius="full"
                                w='100%'
                                mt={10}
                                h={2}
                                mx="auto"
                            >
                                <Box bgColor="red.400" h={2} borderRadius="full" ml={`${carouselBarSize * carouselIndex}%`} w={`${carouselBarSize}%`} />
                            </Box>

                            <Flex alignItems={'flex-end'} gap={4}>

                                <Flex
                                    onClick={() => { carouselIndex <= 0 ? setCarouselIndex(carouselLength - 1) : setCarouselIndex(carouselIndex - 1) }}
                                    _hover={{color:'red.400', transition:'400ms'}}
                                    cursor={'pointer'}
                                >
                                    <ArrowLeft />
                                </Flex>

                                <Flex
                                    onClick={() => { carouselIndex >= carouselLength - 1 ? setCarouselIndex(0) : setCarouselIndex(carouselIndex + 1) }}
                                    _hover={{color:'red.400', transition:'400ms'}}
                                    cursor={'pointer'}
                                >
                                    <ArrowRight />
                                </Flex>

                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>

                {/* Linha 2 de cards */}
                <Flex w='100%' flexDir={['column', 'column', 'column', 'row', 'row']} justifyContent={'space-between'} gap={4}>

                    {/* CARD 2, 3 e 4 */}
                    {isMobile ?
                        ''
                        :
                        <CarouselCard card={carouselIndex <= 0 ? carouselFeedbacks[carouselLength - 1] : carouselFeedbacks[carouselIndex - 1]} />
                    }
                    <CarouselCard card={carouselFeedbacks[carouselIndex]} />
                    {isMobile ?
                        ''
                        :
                        <CarouselCard card={carouselIndex == carouselLength - 1 ? carouselFeedbacks[0] : carouselFeedbacks[carouselIndex + 1]} />
                    }
                </Flex>

            </Flex>

            <>
                {isMobile ?
                    <>
                        {/* <Image
                            top={-300}
                            bottom={0}
                            left={0}
                            my='auto'
                            w={'100px'}
                            position={'absolute'}
                            // src='static/img/container_1/servicesSection/dots/square-dots-mobile.png'
                        /> */}
                        <Image
                            right={0}
                            bottom={0}
                            w={'100px'}
                            position={'absolute'}
                            src='static/img/container_1/servicesSection/dots/square-dots-mobile.png'
                        />
                    </>
                    : ''
                }
            </>
        </Flex>
    )
}