import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from 'theme';
import { ThemeProvider } from '@material-ui/core/styles';

import { FeedbackProvider } from 'context/FeedbackContextProvider';
import { OrderHistoryProvider } from 'context/OrderHistoryContextProvider';
import Feedback from './components/Feedback';
import Layout from './components/Layout';
import CreateOrder from './pages/CreateOrder';
import OrderHistory from './pages/OrderHistory';

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <FeedbackProvider>
            <OrderHistoryProvider>
                <Router>
                    <Layout>
                        <Switch>
                            <Route path="/" exact>
                                <CreateOrder />
                            </Route>
                            <Route path="/order-history">
                                <OrderHistory />
                            </Route>
                        </Switch>
                        <Feedback />
                    </Layout>
                </Router>
            </OrderHistoryProvider>
        </FeedbackProvider>
    </ThemeProvider>
);

export default App;
