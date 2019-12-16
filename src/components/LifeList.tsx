import React from 'react';
import { KingdomListing } from "./KingdomListing";
import { SpeciesContainerProps } from "./BaseProps";

interface LifeListProps extends SpeciesContainerProps {
    fullName: string
}

export const LifeList = ( props: LifeListProps ) => {
    const GITHUB_URL = "https://github.com/MarkNenadov/inat-LL/";

    const { fullName, speciesList } = props;
    return (
        <div style={{ backgroundColor: "white", width: "auto", padding: "50px" }}>
            <h1>{fullName}'s <a href="http://inaturalist.ca/">iNaturalist</a> Life List</h1>
            <p>Total species: { speciesList.length }</p>
            <KingdomListing speciesList={speciesList} />
            <p>Source code (JavaScript/TypeScript/React): <a href={ GITHUB_URL }>github.com/MarkNenadov/inat-LL/</a></p>
        </div>
    );
};