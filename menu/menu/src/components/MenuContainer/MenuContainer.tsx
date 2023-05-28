import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import MenuItem from "../MenuItem/MenuItem";

const styles: React.CSSProperties = {
    height: '100vh',
    width: 240,
    borderRight: '1px solid #AAA',
    display: 'flex',
    flexDirection: 'column',
}

export type RouteType = {
    label: string;
    route: string;
}

type MenuProps = {
    routes: RouteType[];
}

const MenuContainer = ({routes}: MenuProps) => {
    
    return (
        <aside style={styles}>
          {routes.map(route => {
              return <MenuItem route={route}/>
          })}
        </aside>
      )
};

export default MenuContainer