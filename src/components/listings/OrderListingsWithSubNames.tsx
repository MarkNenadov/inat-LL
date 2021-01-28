import { Species } from '../../model/Species';
import { SpeciesRow } from './SpeciesRow';
import React from 'react';

interface OrderListingsWithSubNamesProps {
    orderName: string;
    subNames: string[];
    species: Species[];
}

export const OrderListingsWithSubNames = ( props: OrderListingsWithSubNamesProps ) => {
    const { orderName, subNames, species } = props;

    return (
        <>
            {
                subNames.map( ( subName ) => {
                    const speciesWithinSubName = Species.filterByOrderSubName( species, subName );
                    const sortedSpecies = Species.sortByName( speciesWithinSubName );

                    return (
                        <div className="border-solid border-black border w-auto px-3 py-2 mb-5 mr-2" key={ orderName + subName }>
                            <h4>
                                { orderName }
                                { ' ' }
                                (
                                { subName }
                                )
                            </h4>
                            { speciesWithinSubName.length }
                            { ' species ' }

                            {
                                sortedSpecies.map( ( currentSpecies ) => (
                                    <SpeciesRow
                                        species={ currentSpecies }
                                        key={ currentSpecies.name }
                                    />
                                ) )
                            }
                        </div>
                    );
                } )
            }
        </>
    );
};
