import React from 'react';
import { NavLink} from 'react-router-dom';

export default function() {
    return (
        <div>
            <div>
            <NavLink exact to="/"> Discussion </NavLink>
            </div>
        
            <div>
            <NavLink  to="/rules"> rules </NavLink>
            </div>
        
            <div>
            <NavLink exact to="/workflow"> Workflow </NavLink>
            </div>
        </div>
    );
}