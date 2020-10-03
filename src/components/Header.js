import React from 'react';
import useLocal from '../useLocal';
import {useAppState} from '../AppContext';

export default function Header() {
    useLocal();

    let [{toRead, completed}, dispatch] = useAppState();
    return(<div>
        <header className="App-header">
        <h2>Reading Challenge</h2>
        </header>
        <p>We have read <span>{completed.length}</span> books, only <span>{toRead.length}</span> left!</p>
        </div>
    );
}