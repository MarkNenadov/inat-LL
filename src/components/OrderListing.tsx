import React from 'react';
import { SpeciesContainerProps } from "./BaseProps";
import { SpeciesRow } from "./SpeciesRow";
import { OrderListingsWithSubNames } from "./OrderListingsWithSubNames";
import { Species } from "../model/Species";
import { useOrderListingStyles } from "./OrderListingStyles";

interface OrderListingProps extends SpeciesContainerProps {}

export const OrderListing = ( props: OrderListingProps ) => {
    const { speciesList } = props;

    const classes = useOrderListingStyles();

    const orderList = new Set( speciesList.map( species => species.order ).sort() );

    return (
        <div className={ classes.orderListingBox }>
            {
                //@ts-ignore
                [...orderList].map( orderName => {
                    const speciesWithinOrder = Species.filterByOrder( speciesList, orderName );

                    const orderSubNames = Species.deriveSubNamesFromOrderSpecies( speciesWithinOrder );

                    return orderSubNames.length === 0 ? (
                        <div className={ classes.orderBox } key={ orderName }>
                            <h4>{ orderName }</h4>
                            { speciesWithinOrder.length }
                            {" species "}

                            {
                                Species.sortByName( speciesWithinOrder ).map( (species) => {
                                    return <SpeciesRow species={species} key={species.name}/>
                                } )
                            }
                        </div>
                    ) : (
                        <OrderListingsWithSubNames
                            orderName={orderName}
                            species={speciesWithinOrder}
                            subNames={orderSubNames}

                        />
                    );
                })
            }
        </div>
    );
};
