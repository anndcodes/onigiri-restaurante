import { Button, Flex, Link, Text } from "@chakra-ui/react"
import { BsArrowRight } from "react-icons/bs"
import { CallToActionButtonData } from "./data"
import { ArrowRight } from "phosphor-react"

// interface CallToActionButtonProps {
//   bgColor?: string,
//   fontColor?: string,
//   bgCircleColor?: string,
//   width?: string,
//   height?: string,
//   arrowSize?: number,
//   mx?: string,
//   title?: string,
// }

export function CallToActionButton({
  bgColor = "red.400",
  fontColor = "light.400",
  bgCircleColor = "teal.300",
  width = "21.875rem",
  height = "6rem",
  arrowSize = 26,
  mx = "initial",
  title,
}) {

  const scrollToItalianForm = () => {
    const element = document.getElementById("#italianFormSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Element with id 'italianFormSection' not found.");
    }
  };

  return (
    <Link _hover={{ textDecor: "none" }} href={CallToActionButtonData.href} target="_blank"  onClick={() => gtag('event', 'whatsapp_click')}>
      <Button
        w={width}
        h={height}
        px={[2]}
        py={[3]}
        mx={mx}
        _hover={{ bgColor: 'red.600' }}
        boxShadow={"0 4 4 0 #000000"}
        borderRadius={10}
        bgColor={bgColor}
        fontWeight={500}
        fontFamily={"synonym"}
        color={fontColor}
        onClick={scrollToItalianForm} // Add onClick handler to the Button
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={6} w="100%">
          <Text fontSize={'1.25rem'} pb={'0.225rem'}>
            {title}
          </Text>
          <ArrowRight size={arrowSize} weight="light" />
        </Flex>
      </Button>
    </Link>
  );
}
