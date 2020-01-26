import { makeStyles, Theme } from "@material-ui/core";

export const useSpeciesRowStyles = makeStyles(  (theme: Theme ) => ({
    speciesRow: {
        "&:hover": {
            backgroundColor: "#C0C0C0"
        },
        margin: "20px",
        padding: "5px"
    }
}));

