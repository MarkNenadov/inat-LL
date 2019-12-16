import { makeStyles, Theme } from "@material-ui/core";

export const useOrderListingStyles = makeStyles(  (theme: Theme ) => ({
    orderBox: {
        border: "1px solid #000000",
        margin: "0px",
        marginBottom: "12px",
        paddingLeft: "25px",
        paddingRight: "25px",
        paddingBottom: "10px",
        width: "auto"
    }
}));