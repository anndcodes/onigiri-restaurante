import { Flex, Image, Text } from "@chakra-ui/react";

interface CardProps {

    card: {
        id: number;
        name: string;
        description: string;
        date: string;
        image: string;
        stars: number
    }
}


export function CarouselCard(card: CardProps) {

    const cardData = card.card

    return (

        <Flex key={cardData.id} w='100%' flexDir={'column'} >



            {/* SUBCARD */}
            <Flex
                h='360px'
                bgColor={'dark.300'}

                flexDir={'column'}
                justifyContent={'flex-start'}

                // border={'0.5px solid #B8B8B855'}
                gap={8}

                p={8}
            >



                <Flex
                    fontWeight={700}
                    fontSize='1rem'
                    fontFamily={'Noto Serif'}
                    alignItems={'center'}
                    gap={4}
                >

                    {/* FOTO */}
                    <Flex minW={20}>
                        <Image
                            src={cardData.image}
                            boxSize={20}

                            objectFit={'cover'}
                            objectPosition={'center'}
                        />
                    </Flex>

                    {/* NOME E DATA */}
                    <Flex w='100%' flexDir={'column'}>
                        <Text> {cardData.name} </Text>
                        <Text fontFamily={'synonym'} fontWeight={300} fontSize={'0.875rem'} color={'gray.500'}>
                            {cardData.date}
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    fontWeight={400}
                    fontSize='1rem'
                    fontFamily={'synonym'}
                >
                    <Flex>

                        {cardData.description}
                    </Flex>
                </Flex>

                <Flex
                    mt='auto'
                    gap={6}
                    color={'red.400'}
                    alignItems={"left"}
                    justifyContent={"left"}
                >
                    <Flex>      
                        {Array.from({ length: cardData.stars }, (_, index) => (
                        <Image
                            key={index}
                            boxSize={6}
                            src='static/img/container_1/feedbacks/star.png'
                            alt="Estrela"
                        />
                    ))}
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}