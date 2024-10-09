import { Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { MainSection } from "./MainSection";
import { ServicesSection } from "./ServicesSection";
import { Brandings } from "./Brandings";
// import { Partners } from "./Partners";
import { Vantages } from "./Vantages";
import { Feedbacks } from "./Feedbacks";
import { Footer } from "./Footer";
import { Credits } from "../Credits";
import WhatsButton from "../WhatsButton";


export function Container_1() {


    // Iphone, ipads mini and pro. Desktops not included
    const isMobileVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: true,
        xl: false,
    })

    return (
        <Container
            minW='100%'

            bgColor='light.400'
            centerContent={true}
            gap={16}
            p={0}
            m={0}
            position={'relative'}
        >
            <Flex
                maxW={'1312px'}
                flexDir={'column'}
            >


                <MainSection />

                <ServicesSection />

                <Brandings />

                <Vantages />

                {/* <Partners /> */}

                <Feedbacks />

                <Footer />

                <Credits />

                <WhatsButton/>

            </Flex>
        </Container>
    )
}