import React from 'react'
import Layout from '../components/layout'

export default () => 
   <Layout>
        <h2>Career</h2>
        <div className='art-canvas'>
            <div className='row'>
                <img src={require('../components/imgs/canvas-art1.jpg')} alt='art' />
                <img src={require('../components/imgs/canvas-art2.jpg')} alt='art' />
                <img src={require('../components/imgs/canvas-art3.jpg')} alt='art' />
            </div>
        </div>
        <p className='about-section'>LorumLorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic 
             typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem </p>
                <p className='about-section'>LorumLorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic 
             typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem </p>
         <div className='quotes-container'>
             <div className='quotes-item'><img src={require('../components/imgs/face1.jpg')} alt='fist' className='quotes-img' />
             <em> "David sees trees of green and clouds of white. Red roses, too." - <strong>Rebecca Arnett</strong></em></div>
             <div className='quotes-item'><img src={require('../components/imgs/face2.jpg')} alt='fist' className='quotes-img' />
             <em> "Mr. Grolsh often sees them blue for me and you. It makes me think to myself." - <strong>Sayid Jasmin</strong></em></div>
         </div>
   </Layout>
