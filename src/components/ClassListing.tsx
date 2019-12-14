import React, { useEffect, useState } from 'react';
import { SpeciesContainerProps } from "./BaseProps";
import { SpeciesRow } from "./SpeciesRow";
import { OrderListing } from "./OrderListing";
import { SelectionTabs } from "./SelectionTabs";

interface ClassListingProps extends SpeciesContainerProps {}

export const ClassListing = ( props: ClassListingProps ) => {
    const { speciesList } = props;

    const classList = speciesList.map( species => species.class );

    const [ currentClass, setCurrentClass ] = useState( classList[0] );

    useEffect( () => {
        if ( !classList.includes( currentClass )) {
            setCurrentClass( classList[ 0 ] );
        }
    }, [ speciesList ]);

    //@ts-ignore
    let distinctClasses = [...new Set( classList )];

    return (
        <>
            <SelectionTabs
                setCurrentItem={ setCurrentClass }
                currentItemName={ currentClass }
                itemList={ distinctClasses }
            />

            <div style={{clear: "both"}}>
                {
                    //@ts-ignore
                    distinctClasses.filter( distinctClass => distinctClass === currentClass ).map( className => {
                        let speciesWithinClass = speciesList.filter( (species ) => species.class === className );
                        return (
                            <React.Fragment key={ currentClass }>
                                <p key={ currentClass + "speciesCount" }>
                                    { speciesWithinClass.length }
                                    { " species within "  }

                                    { currentClass }
                                </p>
                                <OrderListing
                                    speciesList={ speciesWithinClass }
                                    key={ className + "OrderListing" }
                                />
                            </React.Fragment>
                        );
                    })
                }
            </div>
        </>
    );
};