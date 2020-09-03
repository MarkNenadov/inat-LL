import { Species } from "../model/Species";
import { SpeciesRow } from "./SpeciesRow";
import React from "react";
import { useOrderListingStyles } from "./OrderListingStyles";

interface OrderListingsWithSubNamesProps {
    orderName: string;
    subNames: string[];
    species: Species[];
}

export const OrderListingsWithSubNames = ( props: OrderListingsWithSubNamesProps ) => {
    const { orderName, subNames, species } = props;

    const classes = useOrderListingStyles();

    return (
        <>
            {
                subNames.map( ( subName ) => {
                const speciesWithinSubName =  Species.filterByOrderSubName( species, subName );

                return (
                    <div className={classes.orderBox} key={ orderName + subName }>
                        <h4>{orderName} ({subName})</h4>
                        { speciesWithinSubName.length }
                        { " species " }

                        {
                            Species.sortByName( speciesWithinSubName ).map( ( species ) => {
                                return <SpeciesRow species={ species } key={ species.name } />
                            } )
                        }
                    </div>
                )})
            }
        </>
    );

}
