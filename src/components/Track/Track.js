import React from 'react'
import styles from './track.module.css'




export default function Track({trackData}){

    return(

        <div className={styles.track}>
            <div className={styles.imageContainer}>
            <img 
            alt='cover'
            className={styles.trackImg}
            url={trackData.imgUrl}/>
            </div>
            <div className={styles.detailsContainer}>
                <p>{trackData.trackName}</p>
                <p>by: {trackData.artist}</p>
            </div>
            
        </div>
    )
}