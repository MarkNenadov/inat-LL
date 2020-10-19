import React from 'react';
import { KingdomListing } from './listings/KingdomListing';
import { SpeciesContainerProps } from './BaseProps';
import { useLifeListStyle } from './LifeListStyle';
import { config } from '../config';

interface LifeListProps extends SpeciesContainerProps {
    fullName: string;
}

export const LifeList = ( props: LifeListProps ) => {
    const { urls } = config;

    const classes = useLifeListStyle();

    const { fullName, speciesList } = props;
    return (
        <div className={ classes.lifeListBox }>
            <h1>
                { fullName }
                { "'s" }
                { ' ' }
                <a href={ urls.inaturalist }>iNaturalist</a>
                { ' ' }
                Life List
            </h1>
            <p>
                Total species:
                { speciesList.length }
            </p>
            <KingdomListing speciesList={ speciesList } />
            <p>
                Source code (JavaScript/TypeScript/React):
                <a href={ urls.gitHubProject }>github.com/MarkNenadov/inat-LL/</a>
            </p>
        </div>
    );
};
