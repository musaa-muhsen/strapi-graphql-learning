import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';



// apollo client which is used to create a new connection to the graphql server 
// in memory cache is used is used by the appollo client to cache responses from the server for us
// apollo provider i used to wrap our entire react application and it provides it with the ability to use the appllo client connection that we set to make queries   

// page & layout imports 
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';

// apollo client 
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
  <Router >
    <ApolloProvider client={client}>
    <div className="App">
     <SiteHeader />
      <Switch>
         <Route exact path="/">
             <Homepage />
         </Route>
         <Route path="/details/:id">
             <ReviewDetails />
         </Route>
         <Route path="/category/:id">
             <Category />
         </Route>
      </Switch>
    </div>
    </ApolloProvider>
    </Router>
  );
}

export default App;
