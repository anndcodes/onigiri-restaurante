import { Flex, Image, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { InstagramLogo } from "phosphor-react";
import { CallToActionButton } from "../../../CallToActionButton";
import { mainSectionData } from "../data";
import { CallToActionButtonData } from "../../../CallToActionButton/data";


export function Header() {


    return (
        <Flex
            w='100%'
            px={['2rem', '2rem', '4rem', '2rem', '4rem']}
            py={['1rem', '1rem', '2rem', '2rem', '2rem']}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            {/* LOGO */}
            <Flex
                gap={4}
                alignItems={'center'}
                fontFamily={'Poppins'}
            >

                <Flex>
                    <Image
                        src={mainSectionData.logo.image}
                        maxW='4rem'
                    />
                </Flex>

            </Flex>

            


        </Flex>
    )
}