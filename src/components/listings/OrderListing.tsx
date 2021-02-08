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
        <div className="flex flex-row flex-wrap w-full space-x-3 text-lg">
            {
                [...orderList].map( ( orderName ) => {
                    const speciesWithinOrder = Species.filterByOrder( speciesList, orderName );
                    const orderSubNames = Species.deriveSubNamesFromOrderSpecies( speciesWithinOrder );
                    const sortedSpecies = Species.sortByName( speciesWithinOrder );

                    return orderSubNames.length === 0 ? (
                        <div
                            className="border-solid border-black border w-full lg:w-max px-5 py-4 mb-5 mr-2 flex flex-col"
                            key={ orderName }
                        >
                            <span className="font-bold">{ orderName }</span>
                            <span className={'pb-2'}>
                                { speciesWithinOrder.length }
                                { ' species ' }
                                <div className={'w-full border-solid border-black border'} />
                            </span>
                            <div>
                                {
                                    sortedSpecies.map( ( species ) => (
                                        <SpeciesRow
                                            species={ species }
                                            key={ species.name }
                                        />
                                    ) )
                                }
                            </div>
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
