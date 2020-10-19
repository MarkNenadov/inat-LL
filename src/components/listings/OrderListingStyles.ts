import { makeStyles } from '@material-ui/core';

export const useOrderListingStyles = makeStyles( () => ( {
    orderBox: {
        border: '1px solid #000000',
        margin: '0px',
        marginBottom: '12px',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingBottom: '10px',
        width: 'auto',
    },
    orderListingBox: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '95%',
    },
} ) );
