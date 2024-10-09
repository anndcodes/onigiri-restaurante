import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";
import { cards } from "./data";

export function Vantages() {

    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false
    })


    return (
        // CONTAINER PRINCIPAL
        <Flex
            w='100%'
            bgColor={'red.400'}
            color={'dark.400'}

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
                        top={0}
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


                {/* Linha 1 de cards e title */}
                <Flex w='100%' flexDir={['column', 'column', 'column', 'row', 'row']} justifyContent={'space-between'} gap={8}>

                    {/* CARD TITLE */}
                    <Flex
                        w='100%'
                        fontWeight={[900,900,900,700,700]}
                        fontSize={['1.35rem', '1.35rem', '1.35rem', '2.25rem', '2.25rem']}
                        fontFamily={'Noto Serif'}
                    >
                        <Text
                            pl={[4, 4, 4, 8, 8]}
                            pr={[8, 8, 8, '100%', '100%']}
                            mt='auto'
                            borderLeft={['4px solid #EF4444', '0', '0', '4px solid #EF4444', '4px solid #EF4444']}
                        >
                            Nossos diferenciais
                        </Text>
                    </Flex>

                    {/* CARD 1 E 2 */}
                    {cards.map((card, i) => {

                        if (i <= 1) {
                            return (
                              <Flex
                                key={card.id}
                                w="100%"
                                flexDir={"column"}
                                border={"0.5px solid #EF4444"}
                                bgColor={card.color}
                              >
                                <Flex px={18} pt={4}>
                                  <Image
                                    ml="auto"
                                    boxSize={16}
                                    src={card.image}
                                    objectFit={"contain"}
                                    objectPosition={"center"}
                                  />
                                </Flex>

                                {/* SUBCARD */}
                                <Flex
                                  h="100%"
                                  flexDir={"column"}
                                  justifyContent={"flex-start"}
                                  gap={4}
                                  py={8}
                                  pl={[4, 4, 4, 8, 8]}
                                  pr={[4, 4, 4, 16, 16]}
                                >
                                  <Flex
                                    fontWeight={700}
                                    fontSize={[
                                      "1.25rem",
                                      "1.25rem",
                                      "1.25rem",
                                      "2rem",
                                      "2rem",
                                    ]}
                                    fontFamily={"Noto Serif"}
                                  >
                                    {card.title}
                                  </Flex>

                                  <Flex
                                    fontWeight={400}
                                    fontSize={[
                                      "1rem",
                                      "1rem",
                                      "1rem",
                                      "1.125rem",
                                      "1.125rem",
                                    ]}
                                    fontFamily={"synonym"}
                                  >
                                    {card.description}
                                  </Flex>
                                </Flex>
                              </Flex>
                            );
                        }
                    })}

                </Flex>

                {/* Linha 2 de cards */}
                <Flex w={['100%','100%','100%','72%','72%']} flexDir={['column', 'column', 'column', 'row', 'row']} justifyContent={'space-between'} gap={8}>

                    {/* CARD 2, 3 e 4 */}
                    {cards.map((card, i) => {

                        if (i >= 2 && i <= 4) {
                            return (
                              <Flex
                                key={card.id}
                                w="100%"
                                flexDir={"column"}
                                border={"0.5px solid #EF4444"}
                                bgColor={card.color}
                              >
                                <Flex px={18} pt={4}>
                                  <Image
                                    ml="auto"
                                    boxSize={16}
                                    src={card.image}
                                    objectFit={"contain"}
                                    objectPosition={"center"}
                                  />
                                </Flex>

                                {/* SUBCARD */}
                                <Flex
                                  h="100%"
                                  flexDir={"column"}
                                  justifyContent={"flex-start"}
                                  gap={4}
                                  py={8}
                                  pl={[4, 4, 4, 8, 8]}
                                  pr={[4, 4, 4, 16, 16]}
                                >
                                  <Flex
                                    fontWeight={700}
                                    fontSize={[
                                      "1.25rem",
                                      "1.25rem",
                                      "1.25rem",
                                      "2rem",
                                      "2rem",
                                    ]}
                                    fontFamily={"Noto Serif"}
                                  >
                                    {card.title}
                                  </Flex>

                                  <Flex
                                    fontWeight={400}
                                    fontSize={[
                                      "1rem",
                                      "1rem",
                                      "1rem",
                                      "1.125rem",
                                      "1.125rem",
                                    ]}
                                    fontFamily={"synonym"}
                                  >
                                    {card.description}
                                  </Flex>
                                </Flex>
                              </Flex>
                            );
                        }
                    })}
                </Flex>

            </Flex>

            <>
                {isMobile ?
                    <>
                        <Image
                            top={-300}
                            bottom={0}
                            left={0}
                            my='auto'
                            w={'100px'}
                            position={'absolute'}
                            src='static/img/container_1/servicesSection/dots/square-dots-mobile.png'
                        />
                        <Image
                            right={0}
                            bottom={0}
                            w={'100px'}
                            position={'absolute'}
                            src='static/img/container_1/servicesSection/dots/square-dots-mobile.png'
                        />
                    </>
                    :
                    <Image
                        bottom={-150}
                        right={53}
                        zIndex={0}
                        w={'400px'}
                        position={'absolute'}
                        src='static/img/container_1/servicesSection/dots/square-dots.png'
                    />
                }
            </>
        </Flex>
    )
}