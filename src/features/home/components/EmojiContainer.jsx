import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/popover";
import {
  useDisclosure,
  Button,
  useColorModeValue,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { emojis } from "utils";

function EmojiContainer({ setContent }) {
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <Box>
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button
            variant="iconButton"
            color={useColorModeValue("gray.800", "white.900")}
            paddingBottom="0"
            pt="0.8rem"
          >
            <FontAwesomeIcon icon="smile" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton
            bg="transparent"
            color={useColorModeValue("gray.800", "white.900")}
          />
          <PopoverBody bg={useColorModeValue("white.900", "gray.800")}>
            <Flex wrap="wrap" spacing="0">
              {emojis.map((emoji, index) => (
                <Button
                  key={index}
                  onClick={() => setContent((content) => content + emoji)}
                >
                  {emoji}
                </Button>
              ))}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export { EmojiContainer };
