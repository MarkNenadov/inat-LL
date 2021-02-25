/* eslint-disable prefer-destructuring */
export class Species {
    kingdom: string;
    commonName: string;
    private phylum: string;
    class: string;
    order: string;
    superFamily: string;
    private genus: string;
    name: string;
    url: string;
    lastSeen: string;

    constructor( rowData: string[] ) {
        this.kingdom = rowData[0];
        this.phylum = rowData[1];
        this.class = rowData[4];
        this.order = rowData[9];
        this.superFamily = rowData[15];
        this.genus = rowData[22];
        this.name = rowData[27];
        this.url = rowData[33];
        this.lastSeen = rowData[35];
        this.commonName = rowData[37];
    }

    static sortByName( species: Species[] ) {
        return species.sort( ( a: Species, b: Species ): number => ( `${a.name}` ).localeCompare( b.name ) );
    }

    static filterByKingdom( speciesList: Species[], kingdomName: string ) {
        return speciesList.filter( ( species ) => species.kingdom === kingdomName );
    }

    static filterByClass( speciesList: Species[], className: string ) {
        return speciesList.filter( ( species ) => species.class === className );
    }

    static filterByOrder( speciesList: Species[], orderName: string ) {
        return speciesList.filter( ( species ) => species.order === orderName );
    }

    static deriveSubNamesFromOrderSpecies( speciesList: Species[] ) {
        const namesFromSuperFamiles = speciesList.map( ( species ) => species.nameFromSuperFamily() );
        const speciesSubNames = namesFromSuperFamiles.filter( ( superFamily ) => superFamily !== '' );

        return speciesSubNames.filter( ( item: string, index: number ) => speciesSubNames.indexOf( item ) === index );
    }

    static filterByOrderSubName( speciesList: Species[], orderSubName: string ) {
        if ( orderSubName === 'Butterflies' ) {
            return speciesList.filter( ( species ) => species.superFamily === 'Papilionoidea' );
        }
        return speciesList.filter( ( species ) => species.superFamily !== 'Papilionoidea' );
    }

    public nameFromSuperFamily(): string {
        if ( this.order !== 'Lepidoptera' ) {
            return '';
        }

        if ( this.superFamily === 'Papilionoidea' ) {
            return 'Butterflies';
        }
        return 'Moths';
    }
}
