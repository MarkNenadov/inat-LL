import React from 'react';
import { Species } from '../model/Species';

interface SpeciesRowTooltipProps {
    visible: boolean,
    species: Species,
    getTooltipProps: any,
    setTooltipRef: any
}

export const SpeciesRowTooltip = ( props: SpeciesRowTooltipProps ) => {
    const { visible, species, setTooltipRef, getTooltipProps } = props;

    return (
        <div>
            {
                visible && (
                    <div
                        ref={ setTooltipRef }
                        { ...getTooltipProps( { className: 'tooltip-container' } ) }
                    >
                        <div
                            className="flex flex-col"
                        >
                            <div className="font-bold text-lg">
                                { species.commonName }
                                &nbsp;
                                (
                                { species.name }
                                )
                            </div>
                            <div>
                                First Seen:&nbsp;
                                { species.lastSeen.split( ' ' )[0] }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
};
