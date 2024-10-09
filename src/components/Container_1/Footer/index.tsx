import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { CallToActionButton } from "../../CallToActionButton";



export function Footer() {

    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
    })

    return (
      <Flex
        w="100%"
        bgColor={"dark.400"}
        color={"light.400"}
        flexDir={["column", "column", "column", "row", "row"]}
        alignItems={"flex-end"}
        justifyContent={"center"}
        position={"relative"}
        px={[0, 0, 0, 20, 20]}
        py={[8, 8, 8, 20, 20]}
        gap={[4, 4, 12, 12, 12]}
      >
        {/* CALL TO ACTION CARD */}
        <Flex
          w={["max", "max", "max", "min", "min"]}
          fontWeight={700}
          fontSize={["1.35rem", "1.35rem", "1.35rem", "2.25rem", "2.25rem"]}
          fontFamily={"Noto Serif"}
          flexDir={"column"}
          gap={16}
        >
       
          <Text
            mt="auto"
            pl={[6]}
            pr={16}
            borderLeft={[
              "4px solid #EF4444",
              "4px solid #EF4444",
              "4px solid #EF4444",
              "4px solid #EF4444",
              "4px solid #EF4444",
            ]}
          >
            Venha conhecer nosso restaurante
          </Text>

        
          {isMobile ? (
            ""
          ) : (
            <CallToActionButton width={"350px"} title="Agende sua reserva" />
          )}
        </Flex>

        <Flex
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "column",
            "column",
          ]}
          w="100%"
          p={[4, 4, 0, 0, 0]}
          gap={[4, 4, 4, 2, 2]}
        >
          <Flex flexDir={"column"} gap={6}>
            <Flex justifyContent={'center'}>
              <Text>Onde estamos</Text>
            </Flex>
            <Flex justifyContent={'center'}>
              <Text color="red.400">Av. Liberdade, 0000 0000-000</Text>
            </Flex>

            {isMobile ? (
                <Flex justifyContent={'center'}>
                    <CallToActionButton width={"350px"} title="Agende sua reserva" />
                </Flex>
            ) : (
              ""
            )}
          </Flex>
          <Flex>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2797699364487!2d-46.63699612511863!3d-23.558393461482304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a65a999e0d%3A0x46537033b43ac06b!2sRestaurante%20Lamen%20ASKA!5e0!3m2!1spt-BR!2sbr!4v1728482313302!5m2!1spt-BR!2sbr"
              width="100%"
              height="400px"
              loading="lazy"
            ></iframe>
          </Flex>
        </Flex>
      </Flex>
    );
}