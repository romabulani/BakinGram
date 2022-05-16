import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "xhzTkUi2Nt",
    content: "Nice Weather Today!!",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "janedoe",
        text: "I agree!! Feels like we should go for outing. What say?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "romabulani",
    createdAt: formatDate(),
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFFxfYI1s",
    content: "Started my Baking journey! Look what I made.",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/video/upload/v1652188886/upload-socialmedia/oikev6eomsgahnvxcijd.mp4",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2022-01-26T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "3XHvLP1fg",
    content: "I made this cake for my friend's birthday. Check it out",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188492/upload-socialmedia/cakegif_q11mfm.webp",
    likes: {
      likeCount: 1,
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
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP9kC",
    content: "Yayy! Its my Birthday Today. Made this cake for myself!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014336/ecommerce/chocolatecake4.webp",
    likes: {
      likeCount: 2,
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
    createdAt: "2022-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "IyUlYXTrzZ",
    content: "Who's up for Pineapple Pastry?",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014828/ecommerce/pineapplemuffin1.webp",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nIffvImxo",
        username: "sophiajones",
        text: "Oh! That looks Delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "romabulani",
    createdAt: formatDate(),
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "Ie92xOSVeU",
    content:
      "Check out this amazing video from BakinZone https://bakinzone.netlify.app/videos/qtlhdIfojmc",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6fgd534s",
        username: "janedoe",
        text: "Yes! I am also learning from there!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "alexmaxwell",
    createdAt: formatDate(),
    createdAt: "2022-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "xhzTkUyfNt",
    content: "Believe in yourself! Rest all will fall in place.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "unImWvIzbf",
        username: "romabulani",
        text: "So True!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sophiajones",
    createdAt: formatDate(),
    createdAt: "2022-05-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
