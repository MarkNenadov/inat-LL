import React from 'react';
import './App.css';
import { LifeList } from './components/LifeList';
import { csvData } from './data/LifeListData';
import { parseSpecies } from './utils/ParsingUtils';

const App: React.FC = () => {
    const speciesList = parseSpecies( csvData );
    return (
        <div className="App">
            <LifeList fullName={ 'Mark Nenadov' } speciesList={ speciesList } />
        </div>
    );
};

export default App;
