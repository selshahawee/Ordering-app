import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  white: { color: "white" },

  sidebar: {
    backgroundColor: "#303030",
    height: "100%",
    width: "300px",
    position: "absolute",
    left: 0,
    top: 0,
    paddingTop: "40px",
  },
  box: {
    padding: "8px",
    fontSize: "24px",
    display: "block",
},
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: { margin: 10 },
  title: {
    marginTop: 18,
  },
  space: {
    padding: 10,
  },
  media: { width: 200 },
  largeButton: {
    width: 100,
    justifyContent: "center",
  },

  row: {
    display: "flex",
    padding: 10,
  },
  around: {
    justifyContent: "space-around",
  },
  between: {
    justifyContent: "space-between",
  },
  column: { flexDirection: "column" },
}));
