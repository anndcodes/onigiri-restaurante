import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { labels } from "./data";
import { CallToActionButton } from "../../CallToActionButton";


export function Brandings() {

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
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        px={[0, 0, 0, 20, 20]}
        py={[8, 8, 8, 20, 20]}
      >
        <Flex
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
          ]}
          w="100%"
          justifyContent={"space-between"}
          gap={[12, 4, 4, 0, 0]}
        >
          {isMobile ? (
            <>
              <Flex justifyContent={"center"} width={"100%"}>
                <CallToActionButton title="Peça agora mesmo!" />
              </Flex>

              <Flex flexDir={"row"} w="100%" justifyContent={"center"}>
                {/* LINHA 1 */}
                <Flex
                  flexDir={"column"}
                  borderRight={"1px solid #EF4444"}
                  paddingBlock={45}
                >
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[0].marca}
                    borderBottom={"1px solid #EF4444"}
                    px={12}
                    py={2}
                    h="100%"
                    w="200px"
                  />
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[1].marca}
                    borderBottom={"1px solid #EF4444"}
                    px={12}
                    py={2}
                    h="100%"
                    w="200px"
                  />
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[2].marca}
                    px={12}
                    py={2}
                    h="100%"
                    w="200px"
                  />
                  {/* <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[3].marca}
                    borderBottom={"1px solid #E5E5E555"}
                    px={12}
                    py={2}
                    h="100%"
                  />
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[4].marca}
                    borderBottom={"1px solid #E5E5E555"}
                    px={12}
                    py={2}
                    h="100%"
                  />
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[5].marca}
                    px={12}
                    py={2}
                    h="100%"
                  /> */}
                </Flex>

                {/* LINHA 2 */}
                <Flex flexDir={"column"} paddingBlock={45}>
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[3].marca}
                    borderBottom={"1px solid #EF4444"}
                    px={12}
                    py={2}
                    h="100%"
                    w="200px"
                  />
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[4].marca}
                    borderBottom={"1px solid #EF4444"}
                    px={12}
                    py={2}
                    h="100%"
                    w="200px"
                  />
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[5].marca}
                    px={12}
                    py={2}
                    h="100%"
                    w="200px"
                  />
                  {/* <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[9].marca}
                    borderBottom={"1px solid #E5E5E555"}
                    px={12}
                    py={2}
                    h="100%"
                  />
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[10].marca}
                    borderBottom={"1px solid #E5E5E555"}
                    px={12}
                    py={2}
                    h="100%"
                  />
                  <Image
                    objectFit={"contain"}
                    objectPosition={"center"}
                    src={labels[11].marca}
                    px={12}
                    py={2}
                    h="100%"
                  /> */}
                </Flex>
              </Flex>
            </>
          ) : (
            // MARCAS DESKTOP
            <Flex flexDir={"column"} w="max">
              {/* LINHA 1 */}
              <Flex paddingBlock={5} borderBottom={"1px solid #EF4444"}>
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[0].marca}
                  borderRight={"1px solid #EF4444"}
                  px={12}
                  py={2}
                  w="200px"
                />
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[1].marca}
                  px={12}
                  py={2}
                  w="200px"
                />
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[2].marca}
                  borderLeft={"1px solid #EF4444"}
                  px={12}
                  py={2}
                  w="200px"
                />
              </Flex>

              {/* LINHA 2 */}
              <Flex paddingBlock={5}>
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[3].marca}
                  borderRight={"1px solid #EF4444"}
                  px={12}
                  py={2}
                  w="200px"
                />
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[4].marca}
                  px={12}
                  py={2}
                  w="200px"
                />
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[5].marca}
                  borderLeft={"1px solid #EF4444"}
                  px={12}
                  py={2}
                  w="200px"
                />
              </Flex>

              {/* LINHA 3 */}
              {/* <Flex borderBottom={"1px solid #E5E5E555"}>
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[6].marca}
                  borderRight={"1px solid #E5E5E555"}
                  px={12}
                  py={2}
                />
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[7].marca}
                  px={12}
                  py={2}
                />
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[8].marca}
                  borderLeft={"1px solid #E5E5E555"}
                  px={12}
                  py={2}
                />
              </Flex> */}

              {/* LINHA 4 */}
              {/* <Flex>
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[9].marca}
                  borderRight={"1px solid #E5E5E555"}
                  px={12}
                  py={2}
                />
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[10].marca}
                  px={12}
                  py={2}
                />
                <Image
                  objectFit={"contain"}
                  objectPosition={"center"}
                  src={labels[11].marca}
                  borderLeft={"1px solid #E5E5E555"}
                  px={12}
                  py={2}
                />
              </Flex> */}
            </Flex>
          )}

          {/* CARD TITLE */}
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
              pr={[0, 0, 0, 8, 8]}
              borderLeft={[
                "4px solid #EF4444",
                "4px solid #EF4444",
                "4px solid #EF4444",
                "4px solid #EF4444",
                "4px solid #EF4444",
              ]}
            >
              Plataformas de delivery que entregamos
            </Text>
            {isMobile ? (
              ""
            ) : (
              <CallToActionButton width={"350px"} title="Peça agora mesmo" />
            )}
          </Flex>
        </Flex>
      </Flex>
    );
}