import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  VStack,
  HStack,
  Text,
  Divider,
  IconButton,
  Box,
  Avatar,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { fontAwesomeIconStyle, postCardStyle } from "styles";

function DisplayPost() {
  return (
    <Flex {...postCardStyle} mt="4" pos="relative">
      <Flex w="100%" marginTop="1" padding="2">
        <Avatar
          src="https://randomuser.me/api/portraits/women/27.jpg"
          alt="profile-image"
          size="md"
          marginRight="2"
          name="Adarsh Balika"
        />
        <VStack width="100%">
          <Flex
            alignSelf="flex-start"
            flexWrap="wrap"
            alignItems="center"
            columnGap="1"
          >
            <Text fontWeight="bold">Adarsh Balika</Text>
            <Link to="/">{`@adarshbalika`}</Link>
            <FontAwesomeIcon icon="circle-dot" fontSize="5px" />
            <Text>2h</Text>
            <Menu>
              <MenuButton
                pos="absolute"
                right="8"
                bg="transparent"
                color="gray.700"
                _hover={{ bg: "transparent" }}
              >
                <FontAwesomeIcon icon="ellipsis-h" {...fontAwesomeIconStyle} />
              </MenuButton>
              <MenuList minW="8rem">
                <MenuGroup>
                  <MenuItem
                    _hover={{ bg: "gray.300" }}
                    bg="inherit"
                    fontSize="md"
                  >
                    Edit
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    _hover={{ bg: "gray.300" }}
                    bg="inherit"
                    fontSize="md"
                  >
                    Delete{" "}
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>

          <Text width="100%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptatem mollitia dolorum magni blanditiis in, et libero, nostrum
            inventore aliquam, aspernatur eos assumenda quaerat ipsam
            cupiditate! Assumenda possimus aliquid quos?
          </Text>
          <Divider />
          <HStack alignSelf="flex-start">
            <Box>
              <IconButton
                variant="iconButton"
                icon={<FontAwesomeIcon icon={faComment} />}
              />
              <span>4</span>
            </Box>
            <Box>
              <IconButton
                variant="iconButton"
                icon={<FontAwesomeIcon icon={faHeart} />}
              />
              <span>2</span>
            </Box>
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
    </Flex>
  );
}

export { DisplayPost };
