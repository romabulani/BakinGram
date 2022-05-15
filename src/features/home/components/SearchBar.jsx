import {
  Box,
  FormControl,
  Input,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { UserCard } from "./UserCard";

function SearchBar(props) {
  const { users } = useSelector((state) => state.users);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [searchUser, setSearchUser] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const timerId = useRef();
  const inputSearchRef = useRef(null);

  const searchCondition = (currUser) =>
    currUser.username.toLowerCase().includes(searchUser.toLowerCase()) ||
    currUser.firstName.toLowerCase().includes(searchUser.toLowerCase()) ||
    currUser.lastName.toLowerCase().includes(searchUser.toLowerCase());

  useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (searchUser) setSearchResult(users?.filter(searchCondition));
      else setSearchResult([]);
    }, 300);
    return () => clearTimeout(timerId.current);
  }, [searchUser]);

  const closeSearch = () => {
    onClose();
    setSearchUser("");
  };

  return (
    <Popover
      flip={true}
      initialFocusRef={inputSearchRef}
      isOpen={isOpen}
      placement="bottom"
    >
      <PopoverTrigger>
        <FormControl height="100%">
          <Input
            border="none"
            height="100%"
            placeholder="Search User.."
            variant="unstyled"
            width="85%"
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            ref={inputSearchRef}
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
            onClick={onOpen}
          />
          <InputRightElement width="4.5rem">
            {isOpen ? (
              <FontAwesomeIcon
                onClick={closeSearch}
                icon="close"
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "10px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <FontAwesomeIcon
                onClick={onOpen}
                icon="magnifying-glass"
                style={{
                  position: "absolute",
                  right: "2px",
                  top: "8px",
                  cursor: "pointer",
                }}
              />
            )}
          </InputRightElement>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent maxH="60vh" overflowY="auto" w="16rem">
        <PopoverBody bg={useColorModeValue("white.900", "gray.800")}>
          {searchResult.length === 0 ? (
            <Text p="1rem 0" color="gray.500">
              {searchUser ? "No user found!" : "Search user!"}
            </Text>
          ) : (
            searchResult.map((currUser) => (
              <Box key={currUser._id} onClick={closeSearch}>
                <UserCard user={currUser} gap="1rem" />
              </Box>
            ))
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export { SearchBar };
