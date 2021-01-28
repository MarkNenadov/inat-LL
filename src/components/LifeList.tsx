import React from 'react';
import { KingdomListing } from './listings/KingdomListing';
import { SpeciesContainerProps } from './BaseProps';
import { config } from '../config';

interface LifeListProps extends SpeciesContainerProps {
    fullName: string;
}

export const LifeList = ( props: LifeListProps ) => {
    const { urls } = config;

    const { fullName, speciesList } = props;
    return (
        <div className="bg-white w-auto p-12">
            <span className="font-bold text-9x1">
                { fullName }
                { "'s" }
                { ' ' }
                <a href={ urls.inaturalist }>iNaturalist</a>
                { ' ' }
                Life List
            </span>
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
