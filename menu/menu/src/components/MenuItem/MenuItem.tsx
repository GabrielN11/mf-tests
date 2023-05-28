import React from "react";
import ReactDOM from "react-dom";
import { RouteType } from "../MenuContainer/MenuContainer";
import { useNavigate } from 'react-router-dom';

const styles: React.CSSProperties = {
    height: 40,
    width: '100%',
    borderBottom: '1px solid #aaa',
    cursor: 'pointer'
}

type MenuItemProps = {
    route: RouteType;
}

const MenuItem = ({ route }: MenuItemProps) => {
    const navigate = useNavigate();

    return (
        <div style={styles} onClick={() => navigate(route.route)}>
            <p>{route.label}</p>
        </div >
    )
};

export default MenuItem