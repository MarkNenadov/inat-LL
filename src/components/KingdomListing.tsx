import React, { useState } from 'react';
import { SpeciesContainerProps } from "./BaseProps";
import { Species } from "../model/Species";
import { ClassListing } from "./ClassListing";
import { SelectionTabs } from "./SelectionTabs";
import { useKingdomListingStyles } from "./KingdomListingStyles";

interface KingdomListingProps extends SpeciesContainerProps {}

export const KingdomListing = ( props: KingdomListingProps ) => {
    const { speciesList } = props;

    const classes = useKingdomListingStyles();

    const [ currentKingdom, setCurrentKingdom ] = useState( "Animalia" );

    const kingdomList = new Set( speciesList.map( species => species.kingdom ) );

    //@ts-ignore
    let distinctKingdoms = [...kingdomList];

    return (
        <>
            <SelectionTabs
                setCurrentItem={ setCurrentKingdom }
                currentItemName={ currentKingdom }
                itemList={ distinctKingdoms.map( kingdomName => kingdomName + " [" + Species.filterByKingdom( speciesList, kingdomName ).length + " species]" ) }
            />

            <div className={ classes.kingdomBox }>
                {
                    //@ts-ignore
                    distinctKingdoms.filter( kingdom => currentKingdom === kingdom ).map( kingdomName => {
                        return (
                            <ClassListing
                                speciesList={ Species.filterByKingdom( speciesList, kingdomName ) }
                                key={ kingdomName + "ClassListing" }
                            />
                        );
                    })
                }
            </div>
        </>
    );
};
