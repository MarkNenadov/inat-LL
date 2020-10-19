import React from 'react';
import { Species } from '../../model/Species';
import { useSpeciesRowStyles } from './SpeciesRowStyles';

interface SpeciesRowProps {
    species: Species;
}

export const SpeciesRow = ( props: SpeciesRowProps ) => {
    const { species } = props;

    const classes = useSpeciesRowStyles();

    const commonNameLabel = species.commonName !== '' ? ` (${species.commonName})` : '';
    return (
        <>
            {
                <p className={ classes.speciesRow }>
                    <i>{ species.name }</i>
                    { ' ' }
                    { commonNameLabel }
                </p>
            }
        </>
    );
};
