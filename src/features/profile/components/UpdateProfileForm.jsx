import {
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
  useDisclosure,
  Button,
  useColorModeValue,
  Avatar,
  FormControl,
  FormLabel,
  Input,
  AvatarBadge,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { editUserProfile } from "features";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { inputLeftWrapperStyle, inputWrapperStyle } from "styles";
import { loadUserDetails } from "features";

function UpdateProfileForm() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { authUser, authToken } = useSelector((state) => state.authentication);
  const [website, setWebsite] = useState(authUser.website);
  const [bio, setBio] = useState(authUser.bio);
  const [avatarUrl, setAvatarUrl] = useState(authUser.avatarUrl);
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadUserDetails(authUser.username)), [authUser]);
  const resetFields = () => {
    onClose();
    setWebsite(authUser.website);
    setBio(authUser.bio);
    setAvatarUrl(authUser.avatarUrl);
  };

  const uploadImage = async (image) => {
    if (Math.round(image.size / 1024000) > 2)
      toast.error("File size should be less than 2MB");
    else {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
      const requestOptions = {
        method: "POST",
        body: data,
      };
      await fetch(
        "https://api.cloudinary.com/v1_1/dtrjdcrme/image/upload",
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          setAvatarUrl(json.url);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Image Uploading failed");
        });
    }
  };

  const updateDetails = (e) => {
    e.preventDefault();
    dispatch(
      editUserProfile({ userDetails: { avatarUrl, website, bio }, authToken })
    );
    toast.success("Details Updated!");
    onClose();
  };

  return (
    <>
      <Button variant="outline" h="2rem" onClick={onOpen}>
        Edit Profile
      </Button>
      <Modal isOpen={isOpen} onClose={resetFields} isCentered size="sm" m="2">
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "transparent",
            }}
          />
          <form onSubmit={updateDetails}>
            <ModalBody justifyContent="space-between">
              <FormControl {...inputWrapperStyle}>
                <Text {...inputLeftWrapperStyle}>Avatar</Text>

                <Avatar
                  src={avatarUrl}
                  alt="profile-image"
                  size="md"
                  marginRight="2"
                  name={`${authUser.firstName} ${authUser.lastName}`}
                >
                  <AvatarBadge boxSize="1.5em" border="0">
                    <FormControl>
                      <FormLabel
                        color={useColorModeValue("gray.600", "whiteAlpha.800")}
                        cursor="pointer"
                        position="absolute"
                        right="-10px"
                        bottom="0"
                      >
                        <FontAwesomeIcon icon="camera" />
                      </FormLabel>
                      <Input
                        type="file"
                        visibility="hidden"
                        accept="image/*"
                        onChange={(e) => uploadImage(e.target.files[0])}
                      />
                    </FormControl>
                  </AvatarBadge>
                </Avatar>
              </FormControl>
              <FormControl {...inputWrapperStyle}>
                <FormLabel {...inputLeftWrapperStyle}>Name</FormLabel>
                <Input
                  variant="unstyled"
                  value={`${authUser.firstName} ${authUser.lastName}`}
                  isReadOnly
                />
              </FormControl>
              <FormControl {...inputWrapperStyle}>
                <FormLabel {...inputLeftWrapperStyle}>Username</FormLabel>
                <Input
                  variant="unstyled"
                  value={authUser.username}
                  isReadOnly
                />
              </FormControl>
              <FormControl {...inputWrapperStyle}>
                <FormLabel {...inputLeftWrapperStyle}>Bio</FormLabel>
                <Input
                  _focus={{
                    borderColor: useColorModeValue("purple.900", "purple.300"),
                  }}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </FormControl>
              <FormControl {...inputWrapperStyle}>
                <FormLabel {...inputLeftWrapperStyle}>Website</FormLabel>
                <Input
                  _focus={{
                    borderColor: useColorModeValue("purple.900", "purple.300"),
                  }}
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                mr={3}
                variant="solidPrimary"
                type="submit"
                onClick={updateDetails}
              >
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export { UpdateProfileForm };
