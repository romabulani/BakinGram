import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  VStack,
  HStack,
  Text,
  Image,
  useColorModeValue,
  useMediaQuery,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

function DisplayPost() {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  return (
    <Flex
      w={isMobile ? "90%" : "30rem"}
      borderRadius="lg"
      height="fit-content"
      border="1px"
      borderColor={useColorModeValue("gray.300", "gray.700")}
      ml={isMobile ? "0" : "12"}
      mt="4"
      p="4"
    >
      <Image
        src="https://randomuser.me/api/portraits/women/27.jpg"
        alt="profile-image"
        boxSize="40px"
        marginRight="8"
        borderRadius="full"
        objectFit="cover"
      />
      <VStack width="100%">
        <HStack alignSelf="flex-start">
          <Text fontWeight="bold">Adarsh Balika</Text>
          <Link to="/">{`@adarshbalika`}</Link>
          <FontAwesomeIcon icon="circle-dot" fontSize="5px" />
          <Text>2h</Text>
        </HStack>
        <Text width="100%">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          voluptatem mollitia dolorum magni blanditiis in, et libero, nostrum
          inventore aliquam, aspernatur eos assumenda quaerat ipsam cupiditate!
          Assumenda possimus aliquid quos?
        </Text>
        <Divider />
        <HStack alignSelf="flex-start">
          <IconButton
            variant="iconButton"
            icon={<FontAwesomeIcon icon={faComment} />}
          />
          <span>4</span>
          <IconButton
            variant="iconButton"
            icon={<FontAwesomeIcon icon={faHeart} />}
          />
          <span>2</span>
          <IconButton
            variant="iconButton"
            icon={<FontAwesomeIcon icon={faBookmark} />}
          />
          <IconButton
            variant="iconButton"
            icon={<FontAwesomeIcon icon="share-alt" />}
          />
        </HStack>
      </VStack>
    </Flex>
  );
}

export { DisplayPost };
