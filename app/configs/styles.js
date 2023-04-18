import { Platform } from "react-native";
import Constants from "expo-constants";

import colors from "./colors";

export default {
  appIcon: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.light,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  baseContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardSubtitle: {
    color: colors.medium,
    fontWeight: "bold",
  },
  cardTitle: {
    color: colors.black,
    marginBottom: 10,
  },
  categoryContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  categoryLabel: {
    marginTop: 5,
    textAlign: "center",
  },
  detailsContainer: {
    padding: 20,
  },
  errorText: {
    color: colors.danger,
  },
  imageInputContainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  imageInputImage: {
    width: "100%",
    height: "100%",
  },
  imageInputListContainer: {
    flexDirection: "row",
    padding: 5,
  },
  imageInputList: {
    marginRight: 10,
  },
  listItemContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  listItemDetailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  listItemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  listItemSubTitle: {
    color: colors.medium,
    fontWeight: "100",
  },
  listItemTitle: {
    color: colors.black,
    fontWeight: "600",
  },
  listItemDeleteContainer: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  pickerIcon: {
    marginRight: 10,
    alignSelf: "center",
  },
  pickerPlaceholder: {
    color: colors.medium,
    flex: 1,
  },
  pickerText: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInputIcon: {
    marginRight: 10,
    alignSelf: "center",
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: colors.light,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
};
