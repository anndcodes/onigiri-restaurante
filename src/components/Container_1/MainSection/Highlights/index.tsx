import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Cards } from "./Cards";


export function Highlights() {

    

    return (
        <Flex
            w='100%'
            alignItems={'center'}
            justifyContent={'center'}
            flexDir={[
                'column',
                'column',
                'column',
                'row',
                'row',
            ]}
            p={[0,4,4,20,20]}
            gap={[12,4,4,2,2]}
            maxH={['','','','100vh','100vh']}
            h={['','','','100vh','100vh']}
            position={'relative'}
            zIndex={1}
        >
            <Cards/>
            
        </Flex>
    )
}