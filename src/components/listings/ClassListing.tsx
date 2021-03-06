import React, { useEffect, useState } from 'react';
import { SpeciesContainerProps } from '../BaseProps';
import { OrderListing } from './OrderListing';
import { SelectionTabs } from '../tabs/SelectionTabs';
import { Species } from '../../model/Species';

type ClassListingProps = SpeciesContainerProps

export const ClassListing = ( props: ClassListingProps ) => {
    const { speciesList } = props;

    const classList = speciesList.map( ( species ) => species.class ).sort();

    const [currentClass, setCurrentClass] = useState( classList[0] );

    useEffect( () => {
        if ( !classList.includes( currentClass ) ) {
            setCurrentClass( classList[0] );
        }
    }, [speciesList, setCurrentClass, classList, currentClass] );

    const distinctClasses = [...new Set( classList )];
    const filteredClasses = distinctClasses.filter( ( distinctClass ) => distinctClass === currentClass );

    return (
        <>
            <SelectionTabs
                setCurrentItem={ setCurrentClass }
                currentItemName={ currentClass }
                itemList={ distinctClasses }
            />

            <div className={ 'clear-both pt-5' }>
                {
                    filteredClasses.map( ( className ) => {
                        const speciesWithinClass = Species.filterByClass( speciesList, className );
                        return (
                            <React.Fragment key={ currentClass }>
                                <p key={ `${currentClass}speciesCount` } className="p-0.5 pb-2">
                                    { speciesWithinClass.length }
                                    { ' species within Class ' }

                                    { currentClass }
                                </p>
                                <OrderListing
                                    speciesList={ speciesWithinClass }
                                    key={ `${className}OrderListing` }
                                />
                            </React.Fragment>
                        );
                    } )
                }
            </div>
        </>
    );
};
