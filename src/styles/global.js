export const postCardStyle = {
  flexDirection: "column",
  borderRadius: "lg",
  height: "fit-content",
  px: "2",
  py: "2",
  my: "4",
};

export const displayCardStyle = {
  w: { base: "90vw", md: "85%", lg: "30rem" },
  mt: "4",
  pos: "relative",
  boxShadow: "rgb(0 0 0 / 5%) 0px 0px 10px 4px",
};

export const flexMiddleContainerStyle = {
  flexDirection: "column",
  alignItems: "center",
  flexGrow: "1",
  w: { base: "100%", md: "40%", lg: "62.5%" },
};

export const sidebarStyle = {
  flexDir: "column",
  fontSize: "1.2rem",
  borderRight: "1px",
  w: { md: "5rem", lg: "15rem" },
  display: { base: "none", md: "block" },
};

export const suggestionContainerStyle = {
  flexDirection: "column",
  paddingRight: "4",
  h: "calc(100vh - 3rem)",
  py: "4",
  paddingLeft: "4",
  position: "sticky",
  right: "4",
  top: "3rem",
  w: "18rem",
  borderLeft: "1px",
  display: { base: "none", md: "block" },
  "overflow-y": "scroll",
};

export const flexMiddleOuterContainerStyle = {
  width: "100%",
  flexGrow: "1",
  justifyContent: {
    base: "center",
    md: "space-between",
  },
};

export const fontAwesomeIconStyle = {
  cursor: "pointer",
  fontSize: "1.2rem",
  marginright: "1rem",
};

export const sortButtonsContainerStyle = {
  position: "sticky",
  top: "3.5rem",
  zIndex: "7",
  width: "96vw",
  justifyContent: "space-around",
  alignItems: "center",
  height: "2.5rem",
  padding: "5px",
  display: { base: "flex", md: "none" },
  borderBottom: "1px solid",
};
