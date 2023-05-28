import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MainPage from 'mainpage/MainPage'
import AboutPage from 'sobre/AboutPage'
import Menu from 'menu/Menu'
import { Routes, Route, BrowserRouter } from "react-router-dom";

type RouteTypeComponent = {
  route: string;
  Component: JSX.Element;
}

type RouteType = {
  label: string;
  route: string;
}


const routes: RouteTypeComponent[] = [
  {
    route: '/',
    Component: <MainPage/>
  },
  {
    route: '/sobre',
    Component: <AboutPage/>
  }
]

const menuItems: RouteType[] = [
  {
    label: 'Principal',
    route: '/',
  },
  {
    label: 'Sobre',
    route: '/sobre'
  }
]

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Menu routes={menuItems} />
      <Routes>
        {routes.map(({ Component, ...route }) => (
          <Route element={Component} path={route.route} />
        ))}
      </Routes>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
