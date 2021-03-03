import 'bulma/css/bulma.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import AccountPage from './view/AccountPage';
import BorrowedPage from './view/BorrowedPage';
import SearchPage from './view/SearchPage';
//import store and Privider for redux
import {store} from './store';
import {Provider} from 'react-redux';


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header/>
          <Route path="/" exact component={AccountPage} />
          <Route path="/borrowed" exact component={BorrowedPage} />
          <Route path="/search" exact component={SearchPage} />
        </Router>
      </Provider>    
    </>
  );
}

export default App;
