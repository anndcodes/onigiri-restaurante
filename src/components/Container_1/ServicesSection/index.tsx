import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";
import { cards } from "./data";

export function ServicesSection() {

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
        mt={100}
        w="100%"
        bgColor={"red.500"}
        color={"light.400"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        px={[0, 0, 0, 20, 20]}
        py={[8, 8, 8, 20, 20]}
      >
        <>
          {isMobile ? (
            <Image
              right={0}
              top={0}
              w={"100px"}
              position={"absolute"}
              src="static/img/container_1/servicesSection/dots/square-dots-mobile.png"
            />
          ) : (
            <Image
              left={2}
              top={0}
              w={"400px"}
              position={"absolute"}
              // src='static/img/container_1/servicesSection/dots/square-dots.png'
            />
          )}
        </>

        {/* Container principal com as duas linhas de cards */}
        <Flex
          w="100%"
          flexDir={"column"}
          gap={12}
          zIndex={1}
          maxW={["80vw", "80vw", "80vw", "initial", "initial"]}
        >
          {/* Linha 1 de cards e title */}
          <Flex
            w="100%"
            flexDir={["column", "column", "column", "row", "row"]}
            justifyContent={"space-between"}
            gap={8}
          >
            {/* CARD TITLE */}
            <Flex
              w="100%"
              fontWeight={700}
              fontSize={["1.35rem", "1.35rem", "1.35rem", "2.25rem", "2.25rem"]}
              fontFamily={"Noto Serif"}
            >
              <Text
                pl={[4, 4, 4, 8, 8]}
                pr={[8, 8, 8, "100%", "100%"]}
                mt="auto"
                borderLeft={[
                  "4px solid #fff",
                  "0",
                  "0",
                  "4px solid #fff",
                  "4px solid #fff",
                ]}
              >
                Alguns dos nossos melhores pratos
              </Text>
            </Flex>

            {/* CARD 1 E 2 */}
            {cards.map((card, i) => {
              if (i <= 1) {
                return (
                  <Flex key={card.id} w="100%" flexDir={"column"}>
                    <Image
                      src={card.image}
                      maxH={"240px"}
                      objectFit={"cover"}
                      objectPosition={"center"}
                    />

                    {/* SUBCARD */}

                    <Flex
                      h="100%"
                      bgColor={"dark.300"}
                      flexDir={"column"}
                      justifyContent={"flex-start"}
                      // borderBottom={'0.5px solid #B8B8B855'}
                      // borderLeft={'0.5px solid #B8B8B855'}
                      // borderRight={'0.5px solid #B8B8B855'}
                      gap={4}
                      py={8}
                      pl={[4, 4, 4, 8, 8]}
                      pr={[4, 4, 4, 16, 16]}
                    >
                      <Flex
                        fontWeight={700}
                        fontSize={[
                          "1.5rem",
                          "1.5rem",
                          "1.5rem",
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

                      <Flex
                        w="min"
                        mt="auto"
                        gap={6}
                        color={"red.400"}
                        alignItems={"left"}
                        justifyContent={"left"}
                        borderBottom={"1px solid #EF4444"}
                      >
                        <Text
                          w="max"
                          pb={"0.225rem"}
                          color={"red.400"}
                          fontWeight={400}
                          fontSize={"1.125rem"}
                          fontFamily={"synonym"}
                        >
                          <a href="#">Agende sua reserva</a>
                        </Text>

                        <ArrowRight size={24} weight="light" />
                      </Flex>
                    </Flex>
                  </Flex>
                );
              }
            })}
          </Flex>

          {/* Linha 2 de cards */}
          <Flex
            w="100%"
            flexDir={["column", "column", "column", "row", "row"]}
            justifyContent={"space-between"}
            gap={8}
          >
            {/* CARD 2, 3 e 4 */}
            {cards.map((card, i) => {
              if (i >= 2 && i <= 4) {
                return (
                  <Flex key={card.id} w="100%" flexDir={"column"}>
                    <Image
                      src={card.image}
                      maxH={"240px"}
                      objectFit={"cover"}
                      objectPosition={"center"}
                    />

                    {/* SUBCARD */}
                    <Flex
                      h="100%"
                      bgColor={"dark.300"}
                      flexDir={"column"}
                      justifyContent={"flex-start"}
                    //   borderBottom={"0.5px solid #B8B8B855"}
                    //   borderLeft={"0.5px solid #B8B8B855"}
                    //   borderRight={"0.5px solid #B8B8B855"}
                      gap={4}
                      py={8}
                      pl={[4, 4, 4, 8, 8]}
                      pr={[4, 4, 4, 16, 16]}
                    >
                      <Flex
                        fontWeight={700}
                        fontSize={[
                          "1.5rem",
                          "1.5rem",
                          "1.5rem",
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

                      <Flex
                        w="min"
                        mt="auto"
                        gap={6}
                        color={"red.400"}
                        alignItems={"left"}
                        justifyContent={"left"}
                        borderBottom={"1px solid #EF4444"}
                      >
                        <Text
                          w="max"
                          pb={"0.225rem"}
                          color={"red.400"}
                          fontWeight={400}
                          fontSize={"1.125rem"}
                          fontFamily={"synonym"}
                        >
                          <a href="#">Agende sua reserva</a>
                        </Text>

                        <ArrowRight size={24} weight="light" />
                      </Flex>
                    </Flex>
                  </Flex>
                );
              }
            })}
          </Flex>
        </Flex>

        <>
          {isMobile ? (
            <>
              <Image
                top={-300}
                bottom={0}
                left={0}
                my="auto"
                w={"100px"}
                position={"absolute"}
                src="static/img/container_1/servicesSection/dots/square-dots-mobile.png"
              />
              <Image
                right={0}
                bottom={0}
                w={"100px"}
                position={"absolute"}
                src="static/img/container_1/servicesSection/dots/square-dots-mobile.png"
              />
            </>
          ) : (
            <Image
              bottom={-150}
              right={53}
              zIndex={0}
              w={"400px"}
              position={"absolute"}
              src="static/img/container_1/servicesSection/dots/square-dots.png"
            />
          )}
        </>
      </Flex>
    );
}