import React from 'react';
import { KingdomListing } from "./KingdomListing";
import { SpeciesContainerProps } from "./BaseProps";
import { useLifeListStyle } from "./LifeListStyle";
import { config } from "../config";

interface LifeListProps extends SpeciesContainerProps {
    fullName: string
}

export const LifeList = ( props: LifeListProps ) => {
    const classes = useLifeListStyle();

    const { fullName, speciesList } = props;
    return (
        <div className={ classes.lifeListBox }>
            <h1>{fullName}'s <a href={ config.urls.inaturalist }>iNaturalist</a> Life List</h1>
            <p>Total species: { speciesList.length }</p>
            <KingdomListing speciesList={speciesList} />
            <p>Source code (JavaScript/TypeScript/React): <a href={ config.urls.github_project }>github.com/MarkNenadov/inat-LL/</a></p>
        </div>
    );
};