export const postCardStyle = {
  flexDirection: "column",
  w: { base: "90vw", md: "30rem" },
  borderRadius: "lg",
  height: "fit-content",
  ml: { base: "0", md: 12 },
  px: "2",
  my: "4",
  boxShadow: "rgb(0 0 0 / 5%) 0px 0px 10px 4px",
};

export const flexMiddleContainerStyle = {
  flexDirection: "column",
  alignItems: "center",
  w: { base: "100%", md: "62.5%" },
};

export const sidebarStyle = {
  w: "15rem",
  flexDir: "column",
  fontSize: "1.2rem",
  borderRight: "1px",
  display: { base: "none", md: "block" },
};

export const suggestionContainerStyle = {
  flexDirection: "column",
  paddingRight: "12",
  h: "calc(100vh - 3.5rem)",
  py: "4",
  paddingLeft: "8",
  position: "sticky",
  right: "4",
  top: "3.5rem",
  minW: "12rem",
  borderLeft: "1px",
  display: { base: "none", lg: "block" },
};

export const flexMiddleOuterContainerStyle = {
  width: "100%",
  minHeight: "100vh",
  justifyContent: {
    base: "center",
    md: "flex-start",
    lg: "space-between",
  },
};

export const fontAwesomeIconStyle = {
  cursor: "pointer",
  fontSize: "1.2rem",
  marginright: "1rem",
};
