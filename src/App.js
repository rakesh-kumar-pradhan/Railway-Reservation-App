// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// import Home from './pages/Home';
// import About from './pages/About';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import PrivateRoute from './pages/PrivateRoute';
// import { getProfile } from './store/actions/user';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     this.props.getProfile().finally(() => {
//       this.setState({ isLoading: false });
//     });
//   }

//   render() {
//     if (this.state && this.state.isLoading === false) {
//       return (
//         <div>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/login" component={Login} />
//             <Route path="/sign-up" component={Register} />
//             <PrivateRoute path="/profile" component={Profile} />
//           </Switch>
//         </div>
//       )
//     } else {
//       return (
//         <div>Loading..</div>
//       )
//     }
//   }
// }

// export default connect(null, { getProfile })(App);

import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import messages from "./components/messages";
import Routes from "./components/Route";
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {

  const [locale, setLocale] = useState("en");

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <Routes setLocale={setLocale} />
      </Router>
    </IntlProvider>
  );
}

export default App;

