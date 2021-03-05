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
                                { ( species.commonName ) ? (
                                    <span>
                                        { species.commonName }
                                        &nbsp;
                                        (
                                        { species.name }
                                        )
                                    </span>
                                ) : (
                                    <span>
                                        { species.name }
                                    </span>
                                )
                                }
                            </div>
                            {
                                !!species.superFamily && (
                                    <div>
                                        Super Family:&nbsp;
                                        { species.superFamily }
                                    </div>
                                )
                            }
                            {
                                !!species.family && (
                                    <div>
                                        Family:&nbsp;
                                        { species.family }
                                    </div>
                                )
                            }
                            {
                                !!species.tribe && (
                                    <div>
                                        Tribe:&nbsp;
                                        { species.tribe }
                                    </div>
                                )
                            }
                            <div>
                                Added to iNaturalist:&nbsp;
                                { species.dateCreated.split( ' ' )[0] }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
};
