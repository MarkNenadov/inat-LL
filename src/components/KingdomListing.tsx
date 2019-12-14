import React, { useState } from 'react';
import { makeStyles, Theme } from "@material-ui/core";
import { SpeciesContainerProps } from "./BaseProps";
import { Species } from "../model/Species";
import { useSelectionTabStyles } from "./SelectionTabStyles";
import { ClassListing } from "./ClassListing";
import { SelectionTabs } from "./SelectionTabs";

interface KingdomListingProps extends SpeciesContainerProps {}

export const KingdomListing = ( props: KingdomListingProps ) => {
    const { speciesList } = props;

    const [ currentKingdom, setCurrentKingdom ] = useState( "Animalia" );

    const classes = useSelectionTabStyles();

    const kingdomList = new Set( speciesList.map( species => species.kingdom ) );

    //@ts-ignore
    let distinctKingdoms = [...kingdomList];

    return (
        <>
            <SelectionTabs
                setCurrentItem={ setCurrentKingdom }
                currentItemName={ currentKingdom }
                itemList={ distinctKingdoms }
            />

            <div style={{clear: "both"}}>
                {
                    //@ts-ignore
                    distinctKingdoms.filter( kingdom => currentKingdom === kingdom ).map( kingdomName => {
                        let filteredSpeciesList : Species[] = speciesList.filter( ( species ) => species.kingdom === kingdomName );
                        return (
                            <>
                                <ClassListing speciesList={ filteredSpeciesList } />
                            </>
                        );
                    })
                }
            </div>
        </>
    );
};