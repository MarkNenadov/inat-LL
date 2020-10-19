import React, { useState } from 'react';
import { SpeciesContainerProps } from '../BaseProps';
import { Species } from '../../model/Species';
import { ClassListing } from './ClassListing';
import { SelectionTabs } from '../tabs/SelectionTabs';
import { useKingdomListingStyles } from './KingdomListingStyles';

type KingdomListingProps = SpeciesContainerProps

export const KingdomListing = ( props: KingdomListingProps ) => {
    const { speciesList } = props;
    const classes = useKingdomListingStyles();
    const [currentKingdom, setCurrentKingdom] = useState( 'Animalia' );
    const kingdomList = new Set( speciesList.map( ( species ) => species.kingdom ) );

    // @ts-ignore
    const distinctKingdoms = [...kingdomList];
    const getKingdomSpeciesLabel = ( kingdomName: string ) => `[${Species.filterByKingdom( speciesList, kingdomName ).length} species]`;
    const tabLables = distinctKingdoms.map( ( kingdomName ) => `${kingdomName} ${getKingdomSpeciesLabel( kingdomName )}` );

    return (
        <>
            <SelectionTabs
                setCurrentItem={ setCurrentKingdom }
                currentItemName={ currentKingdom }
                itemList={ tabLables }
            />
            <div className={ classes.kingdomBox }>
                { distinctKingdoms.filter( ( kingdom ) => currentKingdom === kingdom ).map( ( kingdomName ) => (
                    <ClassListing
                        speciesList={ Species.filterByKingdom( speciesList, kingdomName ) }
                        key={ `${kingdomName}ClassListing` }
                    />
                ) ) }
            </div>
        </>
    );
};
