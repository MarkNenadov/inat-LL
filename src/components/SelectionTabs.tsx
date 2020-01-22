import React from "react";
import { useSelectionTabStyles } from "./SelectionTabStyles";

interface SelectionTabsProps {
    itemList: string[];
    currentItemName: string;
    setCurrentItem: (value: string ) => void;
}

export const SelectionTabs = (props: SelectionTabsProps ) => {
    const { itemList, currentItemName, setCurrentItem } = props;

    const classes = useSelectionTabStyles();

    return (
        <div className={ classes.selectionTabsContainer }>
            { itemList.map( itemNameFromList => {
                const itemNameStripped = itemNameFromList.split( " [")[0];

                const classNameToUse = itemNameStripped === currentItemName ? classes.selectedTab : classes.tab;
                return (
                    <div
                        key={ itemNameStripped + "tab" }
                        className={ classNameToUse }
                        onClick={ () => setCurrentItem( itemNameStripped ) }
                    >
                        { itemNameFromList }
                    </div>
                )
            }) }
        </div>
    )
};

