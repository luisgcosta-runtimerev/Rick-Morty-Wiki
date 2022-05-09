import React from 'react'
import styles from './Cards.modules.scss'

export default function Cards({ data }) {
    console.log('cardDAta:', data)

  return (
    <>{data ? (
        data.map(card =>( 
        <div className='col-4 mb-4 position-relative' key={card.id}>
            <div className='cardstyle'>
                <img src={card.image} alt={card.name} className='img-fluid img'/>
                <div className='content' style={{padding: "10px"}}>
                    <div className='fs-4 fw-bold mb-4'>{card.name}</div>
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
            
        </div>
        
        )))
        :
        ('No characters found. Please check if you write correctly what you are looking for')
    }
    </>
  )
}
