import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  purple: {
    900: "#5010AB",
    700: "#6f23e1",
    300: "#c4b5fd",
    200: "#dabdff",
    100: "#d1d8ff",
  },
  gray: {
    900: "#121212",
    800: "#2d2d3a",
    700: "#535353",
    600: "#8b8b8b",
    500: "#718096",
    300: "#b9b9b9",
    100: "#fffffa5d",
  },
  white: {
    900: "#fffffa",
  },
};

const fonts = {
  heading: "Roboto",
  body: "Roboto",
};

const styles = {
  global: (props) => ({
    "html, body": {
      bg: props.colorMode === "dark" ? "gray.900" : "whiteAlpha.800",
    },
    Button: {
      color: props.colorMode === "light" ? "whiteAlpha.900" : "gray.900",
      bg: props.colorMode === "light" ? "purple.700" : "purple.200",
      fontSize: "xl",
      fontWeight: "semibold",
      _hover: {
        bg: props.colorMode === "light" ? "purple.900" : "purple.300",
      },
      _disabled_hover: {
        bg: "unset",
      },
      borderColor: props.colorMode === "light" ? "purple.700" : "purple.200",
    },

    h2: {
      color: props.colorMode === "light" ? "purple.700" : "purple.200",
    },
    "*::placeholder": {
      color: props.colorMode === "light" ? "gray.400" : "whiteAlpha.700",
    },
  }),
};

export const components = {
  Button: {
    baseStyle: {
      py: "0.5rem",
      minW: 10,
      borderRadius: "md",
      _focus: {
        boxShadow: "transparent",
      },
    },
    variants: {
      solidPrimary: {
        height: "auto",
        px: "1.5rem",
      },
      iconButton: {
        as: "span",
        color: "gray.600",
        fontSize: "1.2rem",
        background: "transparent",
        borderColor: "transparent",
        _hover: {
          background: "transparent",
        },
      },
      outline: {
        background: "none",
      },
      link: {
        background: "transparent",
        _hover: {
          background: "transparent",
          textDecoration: "none",
        },
      },
    },
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  config,
  styles,
  components,
});
