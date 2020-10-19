import { makeStyles } from '@material-ui/core';

export const useSpeciesRowStyles = makeStyles( () => ( {
    speciesRow: {
        '&:hover': {
            backgroundColor: '#C0C0C0',
        },
        margin: '20px',
        padding: '5px',
    },
} ) );
