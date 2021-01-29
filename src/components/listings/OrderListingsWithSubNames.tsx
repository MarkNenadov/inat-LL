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
                        <div className="border-solid border-black border w-full lg:w-max px-5 py-4 mb-5 mr-2 flex flex-col" key={ orderName + subName }>
                            <span className={'font-bold'}>
                                { orderName }
                                { ' ' }
                                (
                                { subName }
                                )
                            </span>

                            <span className={"pb-2"}>                            
                                { speciesWithinSubName.length }
                                { ' species ' }
                                <div className={'w-full border-solid border-black border'} />
                            </span>

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
