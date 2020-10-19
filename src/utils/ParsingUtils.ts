import { Species } from '../model/Species';
// @ts-ignore
import CSV from 'csv-string';

export const parseSpecies = ( csvData: string ) => {
    const result: Species[] = [];

    CSV.parse( csvData ).forEach( ( row: string[] ) => {
        if ( row[0] !== 'kingdom' ) {
            const species = new Species( row );
            if ( species.name.includes( ' ' ) ) {
                result.push( species );
            }
        }
    } );

    return result;
};
