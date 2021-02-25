import React from 'react';
import { Species } from '../../model/Species';
import { usePopperTooltip } from 'react-popper-tooltip';
import { SpeciesRowTooltip } from '../SpeciesRowTooltip';
import 'react-popper-tooltip/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface SpeciesRowProps {
    species: Species;
}

export const SpeciesRow = ( props: SpeciesRowProps ) => {
    const { species } = props;
    const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip();

    const commonNameLabel = species.commonName !== '' ? ` (${species.commonName})` : '';
    return (
        <div>
            <span
                ref={ setTriggerRef }
                className="cursor-pointer"
            >
                <span
                    className={ 'hover:bg-gray-200 text-lg pr-2' }
                >
                    <i>{ species.name }</i>
                    { ' ' }
                    { commonNameLabel }
                </span>

                <a
                    target={ 'top' }
                    href={ species.url }
                >
                    <FontAwesomeIcon icon={ faLink } />
                </a>
            </span>

            <SpeciesRowTooltip
                species={ species }
                setTooltipRef={ setTooltipRef }
                getTooltipProps={ getTooltipProps }
                visible={ visible }
            />
        </div>
    );
};
