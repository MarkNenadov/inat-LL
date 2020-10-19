import React from 'react';
import { useSelectionTabStyles } from './SelectionTabStyles';

interface SelectionTabProps {
    itemName: string;
    setCurrentItem: ( value: string ) => void;
    currentItemName: string;
}

export const SelectionTab = ( props: SelectionTabProps ) => {
    const { itemName, setCurrentItem, currentItemName } = props;

    const classes = useSelectionTabStyles();

    const itemNameStripped = itemName.split( ' [' )[0];
    const isSelected = itemNameStripped === currentItemName;

    return (
        <div
            key={ `${itemNameStripped}tab` }
            className={ isSelected ? classes.selectedTab : classes.tab }
            onClick={ () => setCurrentItem( itemNameStripped ) }
        >
            { itemName }
        </div>
    );
};
