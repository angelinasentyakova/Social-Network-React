import { BrowserRouter, HashRouter, Route, withRouter } from "react-router-dom";
import "./App.css";
import "./Null.css";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import store from './redux/redux-store';
import { inititalizeThunkAC } from "./redux/appReducer";
import Preloader from "./Common/Preloader/Preloader";
import { Provider } from "react-redux";
import { Suspense } from "react";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunk();
  }
  render() {
    if (!this.props.initialized) return <Preloader/>
      return (<div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <main className="main">
          <Route path="/profile/:userId?" render={() => {
            return <Suspense fallback={<Preloader/>}>
              <ProfileContainer store={this.props.store} />
              </Suspense>
          }} />
          <Route path="/dialogs" render={() => {
            return <Suspense fallback={<Preloader/>}>
              <DialogsContainer store={this.props.store} />
            </Suspense>
          }}/>
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={() => <UsersContainer store={this.props.store} />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login />} />
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeThunk: inititalizeThunkAC }))
  (App);

let MainApp = () => {
  return (
    <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  </React.StrictMode>
    )
}
  
export default MainApp;


