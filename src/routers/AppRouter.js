import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Yad2ContextProvider from '../context/Yad2Context'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
import SearchContextProvider from '../context/SearchContext'
import LoginContextProvider from '../context/LoginContext'
import LoginModal from '../components/login/LoginModal'
import NewPost from '../components/new-post/NewPost'

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Yad2ContextProvider>
                <LoginContextProvider>
                    <Header />
                    <LoginModal />
                    <SearchContextProvider>
                        <Switch>
                            <Route path="/new-post" component={NewPost} />
                            <Route path="/" component={Main} exact={true} />
                        </Switch>
                    </SearchContextProvider>
                    <Footer />
                </LoginContextProvider>
            </Yad2ContextProvider>
        </BrowserRouter>
    )
}
export default AppRouter