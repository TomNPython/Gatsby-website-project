import React from 'react'
import { Link } from 'gatsby'

export default () => <div>
            <nav>
                <ul>
                    <Link to='/' activeClassName='link-active'>Home</Link>
                    <Link to='/about' activeClassName='link-active'>About</Link>
                    <Link to='/gallery' activeClassName='link-active'>Gallery</Link>
                    <Link to='/contact' activeClassName='link-active'>Contact</Link>
                </ul>
            </nav>
        </div>
