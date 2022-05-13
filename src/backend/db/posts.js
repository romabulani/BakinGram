import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "siFFxfYI1s",
    content: "Started my Baking journey! Look what I made.",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/video/upload/v1652188886/upload-socialmedia/oikev6eomsgahnvxcijd.mp4",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP9kC",
    content: "Yayy! Its my Birthday Today. Made this cake for myself!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014336/ecommerce/chocolatecake4.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "QK52wf6HI1",
        username: "janedoe",
        text: "Wow! Looks Amazzing! Happy Birthday!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP1fg",
    content: "I made this cake for my friend's birthday. Check it out",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188492/upload-socialmedia/cakegif_q11mfm.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "johndoe",
        text: "That's mouth watering! Could you make one for my Birthday as well?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "janedoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
