import React from 'react'
import './layout.css'
import Nav from './nav'
import Header from './header'

// try introducing Helmet, import { Helmet } from 'react helmet' and try putting tags at
// top of layout

export default ({ children }) => (
        <div>
            <Header />
            {children}
            <Nav />
        </div>
)