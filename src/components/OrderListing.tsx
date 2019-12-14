import React from 'react';
import { SpeciesContainerProps } from "./BaseProps";
import { SpeciesRow } from "./SpeciesRow";
import { Species } from "../model/Species";
import { useSelectionTabStyles } from "./SelectionTabStyles";
import { useOrderListingStyles } from "./OrderListingStyles";

interface OrderListingProps extends SpeciesContainerProps {}

export const OrderListing = ( props: OrderListingProps ) => {
    const { speciesList } = props;

    const classes = useOrderListingStyles();

    let orderList = new Set( speciesList.map( species => species.order ) );

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
                                //@ts-ignorez
                                speciesWithinOrder.sort( (a : Species, b : Species) : number => ('' + a.name.attr).localeCompare(b.name.attr) ).map( (species ) => {
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