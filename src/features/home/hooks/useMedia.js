function useMedia() {
  const uploadMedia = async (media, setMediaURL, setDeleteToken) => {
    const mediaType = media.type.split("/")[0];
    if (mediaType === "video" && Math.round(media.size / 1024000) > 10)
      toast.error("Video size should be less than 10MB");
    else if (Math.round(media.size / 1024000) > 4)
      toast.error("Image size should be less than 4MB");
    else {
      const data = new FormData();
      data.append("file", media);
      data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
      const requestOptions = {
        method: "POST",
        body: data,
      };
      const url =
        mediaType === "video"
          ? "https://api.cloudinary.com/v1_1/dtrjdcrme/video/upload"
          : "https://api.cloudinary.com/v1_1/dtrjdcrme/image/upload";
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
          setMediaURL(json.url);
          setDeleteToken(json.delete_token);
          return [json.url, json.delete_token];
        })
        .catch((error) => {
          console.error(error);
          toast.error("Media Uploading failed");
        });
    }
  };

  const deleteMedia = async (deleteToken, setMediaURL, setDeleteToken) => {
    try {
      const formData = new FormData();
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_API_KEY
      );
      formData.append("token", deleteToken);
      await fetch("https://api.cloudinary.com/v1_1/dtrjdcrme/delete_by_token", {
        method: "POST",
        body: formData,
      });
      if (setDeleteToken) {
        setDeleteToken(null);
        setMediaURL("");
      }
    } catch (error) {
      console.error("deleteMedia: Error In deleting Media", error);
      if (setDeleteToken) {
        setDeleteToken(null);
        setMediaURL("");
      }
    }
  };

  return { uploadMedia, deleteMedia };
}

export { useMedia };
