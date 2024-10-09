import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Highlights } from "./Highlights";


export function MainSection() {
    


    return (
        // CONTAINER PRINCIPAL
        <Flex
            w='100%'
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >

            <Highlights/>
        </Flex>
    )
}