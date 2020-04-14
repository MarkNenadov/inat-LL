export class Species {
    kingdom: string;
    commonName: string;
    private phylum: string;
    class: string;
    order: string;
    private genus: string;
    name: string;

    constructor( rowData: any ) {
        this.kingdom = rowData[0];
        this.phylum = rowData[1];
        this.class = rowData[2];
        this.order = rowData[5];
        this.genus = rowData[11];
        this.name = rowData[12];
        this.commonName = rowData[22];
    }

    static sortByName( species: Species[] ) {
        //@ts-ignore
        return species.sort( ( a : Species, b : Species ) : number => ( '' + a.name).localeCompare( b.name ) );
    }

    static filterByKingdom( speciesList: Species[], kingdomName: string ) {
        return speciesList.filter( ( species ) => species.kingdom === kingdomName )
    }

    static filterByClass(speciesList: Species[], className: string) {
        return speciesList.filter( (species ) => species.class === className );
    }

    static filterByOrder(speciesList: Species[], orderName: string) {
        return speciesList.filter( (species ) => species.order === orderName );
    }
}