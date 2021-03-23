import React from 'react'
import { Cell, Grid } from 'react-mdl'

export default function LandingPage() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <div className='img-container'>

                    <img  
                    src='https://i.imgur.com/qBWEhUA.jpg '
                    className='avatar-img'
                    />
                    </div>
                    <div className='banner-text'>
                        <h3> Software Engineer</h3>
                        <p>HTML/CSS | Javascript | React | Ruby | Rails | Node.js | MongoDB | Postgresql | Express |</p>
                    </div>
                </Cell>
            </Grid>
            
        </div>
    )
}
