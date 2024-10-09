import { Flex, Heading, Image, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { PiRoadHorizon } from "react-icons/pi";
import { AirplaneTakeoff } from "phosphor-react";
import { Card_1_Data } from "./data";
import { CallToActionButton } from "../../../../../CallToActionButton";
import { CallToActionButtonData } from "../../../../../CallToActionButton/data";

export function Card_1() {

    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false
    })

    return (
      <Flex
        w="100%"
        h="100%"
        pr={[0, 4, 4, 12, 12]}
        pl={[0, 4, 4, 0, 0]}
        py={[4, 4, 4, 0, 0]}
        gap={[12, 12, 12, 0, 0]}
        flexDir={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
        position={"relative"}
        // pb={80} para ajustar altura
      >
        {/* LOGO */}
        <Flex mx={[0, 4, 4, "initial", "initial"]} mt={4}>
          <Image
            w={100}
            src="https://i.imgur.com/qNn0Xev.png"
            maxW={["180px", "180px", "180px", "391px", "391px"]}
          />

          {isMobile ? (
            <Image
              src="static/img/container_1/mainSection/header/header-dots.png"
              position={"absolute"}
              top={-32}
              right={0}
              w={32}
            />
          ) : (
            ""
          )}
        </Flex>

        {/* HEADING */}
        <Flex
          flexDir={"column"}
          pl={[2, 8, 8, 8, 8]}
          zIndex={1}
          gap={6}
          mx={[4, 4, 4, "initial", "initial"]}
          borderLeft={[
            "4px solid #EF4444",
            "0",
            "0",
            "4px solid #EF4444",
            "4px solid #EF4444",
          ]}
        >
          <Flex>
            <Heading
              fontFamily={"Noto Serif"}
              fontWeight={800}
              fontSize={["1.5rem", "1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              Seu novo restaurante japonês favorito em São Paulo
            </Heading>
          </Flex>

          <Flex>
            <Text
              fontFamily={"synonym"}
              fontSize={["1rem", "1rem", "1rem", "1.25rem", "1.25rem"]}
            >
              <b style={{ fontWeight: "500" }}>
                Venha conhecer toda a gastronomia japonesa como você nunca viu,
              </b>{" "}
              temos sushi, poke, temaki, yakissoba lamen e muito mais!
            </Text>
            <Flex h="140px" />
          </Flex>
        </Flex>
        {isMobile ? (
          <Flex h="50%" w="100%" zIndex={0} mt={-20} mb={-20}>
            <Image
              src="https://images.unsplash.com/photo-1628652338396-6bc0b0140e58?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              w="100%"
              objectFit={"cover"}
            />
          </Flex>
        ) : (
          ""
        )}

        {/* CALL BUTTON */}
        <Flex mx={["auto", "auto", "auto", "initial", "initial"]}>
          <CallToActionButton title="Agende sua reserva" />
        </Flex>

        {/* CONTATOS */}
        <Flex
          mt={5}
          gap={8}
          mx={[4, 4, 4, "initial", "initial"]}
          flexDir={["column", "column", "row", "row", "row"]}
        >
          <Flex flexDir={"column"}>
            <Text fontWeight={500} fontSize={"1.25rem"}>
              {" "}
              Onde estamos
            </Text>
            <Text fontWeight={400} color="red.600">
              Av. Liberdade, 0000
            </Text>
          </Flex>

          <Flex flexDir={"column"}>
            <Text fontWeight={500} fontSize={"1.25rem"}>
              {" "}
              Fale conosco{" "}
            </Text>
            <Link
              _hover={{
                textDecor: "none",
                color: "red.800",
                transition: "300ms",
              }}
              color="red.600"
              href={CallToActionButtonData.href}
              target="_blank"
            >
              <Text>☎️ (11) 0000-0000</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    );
}