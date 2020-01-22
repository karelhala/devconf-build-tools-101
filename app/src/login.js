import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';

const App = () => {
    return <main className="pf-c-page__main" role="main">
        Let me in!
    </main>;
};

ReactDom.render(<App />, document.querySelector('#page'));
