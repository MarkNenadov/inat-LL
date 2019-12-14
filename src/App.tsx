import React from 'react';
import './App.css';
import { LifeList } from "./components/LifeList";
import { csvData } from "./data/LifeListData";
//@ts-ignore
import CSV from "csv-string";
import { Species } from './model/Species';

const parseSpecies = (csvData: string) => {
    let result : Species[] = [];
    CSV.parse( csvData ).forEach( (row : any) => {
        if ( row[0] !== "kingdom" ) {
            const species = new Species( row );

            if ( species.name.includes( " ") ) {
                result.push( species )
            }
        }
    });
    return result;
};

const App: React.FC = () => {
    const speciesList = parseSpecies( csvData );
    console.log( speciesList );
  return (
    <div className="App">
      <LifeList fullName={ "Mark Nenadov" } speciesList={ speciesList } />
    </div>
  );
};

export default App;