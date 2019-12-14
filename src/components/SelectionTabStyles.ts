import { makeStyles, Theme } from "@material-ui/core";

export const useSelectionTabStyles = makeStyles(  (theme: Theme ) => ({
    tab: {
        border: "1px solid #000000",
        cursor: "pointer",
        float: "left",
        width: "auto",
        padding: "4px 8px 4px 8px",
        margin: "5px",
        fontSize: "1.3em"
    },
    selectedTab: {
        border: "1px solid #000000",
        cursor: "pointer",
        backgroundColor: "lightgreen",
        float: "left",
        width: "auto",
        padding: "4px 8px 4px 8px",
        margin: "5px",
        fontSize: "1.3em"
    }

}));