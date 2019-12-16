import React from 'react';
import { SpeciesContainerProps } from "./BaseProps";
import { SpeciesRow } from "./SpeciesRow";
import { Species } from "../model/Species";
import { useOrderListingStyles } from "./OrderListingStyles";

interface OrderListingProps extends SpeciesContainerProps {}

export const OrderListing = ( props: OrderListingProps ) => {
    const { speciesList } = props;

    const classes = useOrderListingStyles();

    let orderList = new Set( speciesList.map( species => species.order ).sort() );

    return (
        <div style={{ display: "flex", flexWrap: "wrap", width: "95%" }}>
            {
                //@ts-ignore
                [...orderList].map( orderName => {
                    const speciesWithinOrder = speciesList.filter( (species ) => species.order === orderName );
                    return (
                        <div className={classes.orderBox} key={ orderName }>
                            <h4>{orderName}</h4>
                            { speciesWithinOrder.length }
                            { " species " }

                            {
                                Species.sortByName( speciesWithinOrder ).map( ( species ) => {
                                    return <SpeciesRow species={ species } key={ species.name } />
                                } )
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};