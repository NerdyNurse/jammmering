import React from 'react'
import styles from './track.module.css'




export default function Track({trackdata}){

    return(

        <div className={styles.track}>
            <div className={styles.imageContainer}>
            <img 
            alt='cover'
            className={styles.trackImg}
            src={trackdata.imgUrl}/>
            </div>
            <div className={styles.detailsContainer}>
                <p>{trackdata.trackName}</p>
                <p>by: {trackdata.artist}</p>
            </div>
            
        </div>
    )
}