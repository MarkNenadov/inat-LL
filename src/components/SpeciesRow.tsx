import React from 'react';
import { SpeciesContainerProps } from "./BaseProps";
import { Species } from "../model/Species";
import { makeStyles, Theme } from "@material-ui/core";
import { useOrderListingStyles } from "./OrderListingStyles";

interface SpeciesRowProps {
    species: Species;
}

export const useSpeciesRowStyles = makeStyles(  (theme: Theme ) => ({
    speciesRow: {
        "&:hover": {
            backgroundColor: "#C0C0C0"
        },
        margin: "20px",
        padding: "5px"
    }
}));

export const SpeciesRow = ( props: SpeciesRowProps ) => {
    const { species } = props;

    const classes = useSpeciesRowStyles();

    return (
        <>
            {
                <p className={ classes.speciesRow }><i>{ species.name }</i> ({ species.commonName })</p>
            }
        </>
    );
};