import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getFilter', { id: '10000' }).then((response) => {
            setData("It worked");
        });
    }, []);

    return (
        <div>
            {data ? data : 'Loading...'}
        </div>
    );
}

export default App;
