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
                const classNameToUse = itemNameFromList === currentItemName ? classes.selectedTab : classes.tab;
                return (
                    <div
                        key={ itemNameFromList + "tab" }
                        className={ classNameToUse }
                        onClick={ () => setCurrentItem( itemNameFromList ) }
                    >
                        { itemNameFromList }
                    </div>
                )
            }) }
        </div>
    )
};

