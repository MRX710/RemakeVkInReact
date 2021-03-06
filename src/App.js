import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav/MainNav";
import AdditNav from "./Components/AdditNav/AdditNav";
import Friends from "./Components/DifferrentContent/Friends/Friends";
import Groups from "./Components/DifferrentContent/Groups/Groups";
import Messages from "./Components/DifferrentContent/Messages/Messages";
import Music from "./Components/DifferrentContent/Music/Music";
import Profile from "./Components/DifferrentContent/Profile/Profile";
import Settings from "./Components/DifferrentContent/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/DifferrentContent/News/News";
import OpenDialog from "./Components/DifferrentContent/Messages/OpenDialog/OpenDialog";
import UsersContainer from "./Components/Users/UsersContainer";



// let profile = () => <Profile/>
// let messages = () => <Messages/>
// let news = () => <News/>
// let friends = () => <Friends/>
// let groups = () => <Groups/>
// let music = () => <Music/>
// let settings = () => <Settings/>

const App = (props) => {

    return (
            <div className="wrapper">
                <Header/>
                <div className="different_content">
                    <MainNav/>
                    <div className="main_content">
                        {/*<Route path="/profile"  component={profile}/>*/}
                        {/*<Route path="/messages" component={messages}/>*/}
                        {/*<Route path="/news"     component={news}/>*/}
                        {/*<Route path="/friends"  component={friends}/>*/}
                        {/*<Route path="/groups"   component={groups}/>*/}
                        {/*<Route path="/music"    component={music}/>*/}
                        {/*<Route path="/settings" component={settings}/>*/}

                        <Route path="/profile"  render={() => <Profile store = {props.store}/>}/>
                        <Route exact path="/messages" render={() => <Messages dialogsData={
                            props.state.dialogsPage.friends} dispatch={props.dispatch}/>
                        }/>
                        <Route path={/messages/ + props.state.dialogsPage.currentDialog.id} render={() => <OpenDialog state = {props.state.dialogsPage.currentDialog}/>}/>
                        <Route path="/news"     render={() => <News/>}/>
                        {/*<Route path="/friends"  render={() => <Friends/>}/>*/}
                        <Route path="/groups"   render={() => <Groups/>}/>
                        <Route path="/music"    render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/friends"  render={() => <UsersContainer store = {props.store}/>}/>
                        <Route path="/users" render={() => <UsersContainer store = {props.store}/>}/>
                    </div>
                    <AdditNav/>
                </div>
                {/*<Footer/>*/}
            </div>

    );
}

export default App;
