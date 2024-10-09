import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Card_2_Data } from "./data";


export function Card_2() {

    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false
    })

    return (
      <Flex w="100%" h="100%" flexDir={"column"} gap={14}>
        {isMobile ? (
          ""
        ) : (
          <Flex h="50%" zIndex={1}>
            <Image
              src="https://images.unsplash.com/photo-1628652338396-6bc0b0140e58?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              w="100%"
              objectFit={"cover"}
            />
          </Flex>
        )}
        {isMobile ? (
          ""
        ) : (
          <>
            {/* <Flex
              position={"absolute"}
              zIndex={2}
              top={14}
              bottom={0}
              my="auto"
              right={140}
              bgColor={"red.400"}
              w="4px"
              h="356px"
            ></Flex> */}
            <Image
              src="static/img/container_1/mainSection/header/header-square.png"
              position={"absolute"}
              top={14}
              bottom={0}
              my="auto"
              zIndex={0}
              right={0}
              maxW={190}
            />
          </>
        )}
        {isMobile ? (
          ""
        ) : (
          <Flex h="50%" zIndex={1}>
            <Image
              src="https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              w="100%"
              objectFit={"cover"}
            />
          </Flex>
        )}
      </Flex>
    );
}