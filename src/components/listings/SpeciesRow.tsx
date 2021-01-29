import React from 'react';
import { Species } from '../../model/Species';

interface SpeciesRowProps {
    species: Species;
}

export const SpeciesRow = ( props: SpeciesRowProps ) => {
    const { species } = props;

    const commonNameLabel = species.commonName !== '' ? ` (${species.commonName})` : '';
    return (
        <span>
            {
                <p className={ 'hover:bg-gray-200 text-lg' }>
                    <i>{ species.name }</i>
                    { ' ' }
                    { commonNameLabel }
                </p>
            }
        </span>
    );
};
