import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Split, SplitItem } from '@patternfly/react-core';
import './index.scss';

const Demo1 = (
    lazy(() => import('./routes/demo1'))
);

const Demo2 = (
    lazy(() => import('./routes/demo2'))
);

const Loading = () => 'Loading...';

const App = () => {
    return (
        <main className="pf-c-page__main" role="main">
            <Router>
                <Split>
                    <SplitItem>
                        <Link to="/">Home</Link>
                    </SplitItem>
                    <SplitItem>
                        <Link to="/demo">Demo</Link>
                    </SplitItem>
                </Split>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path="/">
                            <Demo1 />
                        </Route>
                        <Route exact path="/demo">
                            <Demo2 />
                        </Route>
                        <Route exact path="/404" component={() => {
                            window.location.href = '/404.html';
                            return null;
                        }} />
                        <Route path='*'>
                            <Redirect to="/404"/>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </main>
    );
};

ReactDom.render(<App />, document.querySelector('#page'));
