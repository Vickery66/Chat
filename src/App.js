import logo from './logo.svg';
import './App.css';
import {ApolloClient,ApolloProvider,InMemoryCache,createHttpLink,} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import Notes from './Note'
import { Header1 } from './Header';
import { Pages } from './Pages';

const uri="http://localhost:4400/api";//process.env.API_URL;

const httpLink=createHttpLink({uri});
const cache=new InMemoryCache();
const authLink=setContext((_,{headers})=>{
  return {
    headers:{
      ...headers,
      authorization:localStorage.getItem('token')||''
    }
  };
});
const client=new ApolloClient({
    link:authLink.concat(httpLink),
    uri,
    cache,
    connectToDevTools:true
});


function App() {
  
  return (
    <div className="App">
      <ApolloProvider client={client}>
          <Pages/>
      </ApolloProvider>
      <Header1/>
    </div>
  );
}

export default App;
