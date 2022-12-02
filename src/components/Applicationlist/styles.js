import Stylesheet from "reactjs-stylesheet";

export const styles = Stylesheet.create({
  header: {
    marginBottom: 10,
    marginLeft: 2,
    marginRight: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "white",
    width: 90,
    borderRadius: 20,
    borderColor: "black",
    color: "black",
    marginRight: 20,
    height: 40,
  },
});
