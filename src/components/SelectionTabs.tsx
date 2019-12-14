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
        <div style={{ clear: "both", paddingBottom: "40px" }}>
            { itemList.map( itemNameFromList => {
                return (
                    <div key={ itemNameFromList + "tab" } className={ itemNameFromList === currentItemName ? classes.selectedTab : classes.tab } onClick={ () => setCurrentItem( itemNameFromList ) } >
                        { itemNameFromList }
                    </div>
                )
            }) }
        </div>
    )
};

