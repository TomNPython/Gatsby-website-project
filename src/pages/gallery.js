import React from 'react'
import Layout from '../components/layout'

export default () => 
        <Layout>
            <p id='gallery-header'>Gallery</p>
            <div className='gallery-container'>
            <a href='https://www.pexels.com'>
            <div className='gallery-row row1'>
                <p>Galaxies</p>
                </div>
               </a>
               <a href='https://www.pexels.com'>
                <div className='gallery-row row2'>
                <p>Universes</p>
            </div>
            </a>
            <a href='https://www.pexels.com'>
            <div className='gallery-row row3'>
            <p>Nature</p>
                </div>
                </a>
                <a href='https://www.pexels.com'>
                <div className='gallery-row row4'>
                <p>Landscapes</p>
                </div>
                </a>
            </div>
        </Layout>

        // adapt later - replace a tags with Links to inner pages (create inner pages for each
        // with new layout template)