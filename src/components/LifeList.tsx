import React from 'react';
import { KingdomListing } from "./KingdomListing";
import { SpeciesContainerProps } from "./BaseProps";

interface LifeListProps extends SpeciesContainerProps {
    fullName: string
}

export const LifeList = ( props: LifeListProps ) => {
    const { fullName, speciesList } = props;
    return (
        <div style={{ backgroundColor: "white", width: "auto", padding: "50px" }}>
            <h1>{fullName}'s Life List</h1>
            <p>Total species: { speciesList.length }</p>
            <KingdomListing speciesList={speciesList} />
        </div>
    );
};