import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Layout from './components/NavBar';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Feed from './pages/Feed';

function App() {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route>
                        <Layout>
                            <Switch>
                                <Route path="/feed">
                                    <Feed />
                                </Route>
                                <Route path="/stream">
                                    <Stream />
                                </Route>
                            </Switch>
                        </Layout>
                    </Route>
                </Switch>
            </MainLayout>
        </Router>
    );
}

export default App;
