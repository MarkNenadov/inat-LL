import React from 'react';
import { useSelectionTabStyles } from './SelectionTabStyles';
import { SelectionTab } from './SelectionTab';

interface SelectionTabsProps {
    itemList: string[];
    currentItemName: string;
    setCurrentItem: ( value: string ) => void;
}

export const SelectionTabs = ( props: SelectionTabsProps ) => {
    const { itemList, currentItemName, setCurrentItem } = props;

    const classes = useSelectionTabStyles();

    return (
        <div className={ classes.selectionTabsContainer }>
            {
                itemList.map( ( itemNameFromList ) => (
                    <SelectionTab
                        key={ itemNameFromList }
                        setCurrentItem={ setCurrentItem }
                        currentItemName={ currentItemName }
                        itemName={ itemNameFromList }
                    />
                ) )
            }
        </div>
    );
};
