import React from 'react'
import styles from './Cards.modules.scss'
import { useLocation, Link } from 'react-router-dom'
import { Grid } from '@mui/material';

export default function Cards({ data }) {

    const location = useLocation();
  return (
    <>{data ? (
        data.map(card =>( 
        <Grid item xs={12} sm={6} md={4}>
        <Link 
        className='col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark' 
        key={card.id} 
        to={`${location.pathname === '/' ? '' : location.pathname}/${card.id}`}
        style={{ textDecoration: 'none'}}
        >
            <div className='cardstyle'>
                <img src={card.image} alt={card.name} className='img-fluid img'/>
                <div className='content' style={{padding: "10px"}}>
                    <div className='mb-4'>{card.name}</div>
                    <div className=''>
                        <div className='fs-6'>
                             Last location
                        </div>
                        <div className='fs-5'>
                            {card.location.name}
                        </div>
                    </div>
                </div>
            </div>
            {(() => {
            if(card.status=== 'Alive'){
                return (<div className={`${styles.badge} position-absolute badge bg-success`}>{card.status}</div>)
            }
            else if(card.status === 'Dead'){
                return (<div className={`${styles.badge} position-absolute badge bg-danger`}>{card.status }</div>)
            }
            else{
                return (<div className={`${styles.badge} position-absolute badge bg-secondary`}>{card.status }</div>)
            }
        })()}
            
        </Link>
        </Grid>
        )))
        :
        ('No characters found. Please check if you write correctly what you are looking for')
    }
    </>
  )
}
