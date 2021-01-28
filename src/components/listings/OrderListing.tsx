import React from 'react';
import { SpeciesContainerProps } from '../BaseProps';
import { SpeciesRow } from './SpeciesRow';
import { OrderListingsWithSubNames } from './OrderListingsWithSubNames';
import { Species } from '../../model/Species';

type OrderListingProps = SpeciesContainerProps

export const OrderListing = ( props: OrderListingProps ) => {
    const { speciesList } = props;

    const orderList = new Set( speciesList.map( ( species ) => species.order ).sort() );

    return (
        <div className="flex flex-wrap w-full">
            {
                [...orderList].map( ( orderName ) => {
                    const speciesWithinOrder = Species.filterByOrder( speciesList, orderName );
                    const orderSubNames = Species.deriveSubNamesFromOrderSpecies( speciesWithinOrder );
                    const sortedSpecies = Species.sortByName( speciesWithinOrder );

                    return orderSubNames.length === 0 ? (
                        <div className="border-solid border-black border w-auto px-3 py-2 mb-5 mr-2" key={ orderName }>
                            <h4>{ orderName }</h4>
                            { speciesWithinOrder.length }
                            { ' species ' }

                            {
                                sortedSpecies.map( ( species ) => (
                                    <SpeciesRow
                                        species={ species }
                                        key={ species.name }
                                    />
                                ) )
                            }
                        </div>
                    ) : (
                        <OrderListingsWithSubNames
                            orderName={ orderName }
                            species={ speciesWithinOrder }
                            subNames={ orderSubNames }

                        />
                    );
                } )
            }
        </div>
    );
};
