import React from 'react'
import styles from './tracklist.module.css'
import Track from '../Track/Track'




export default function Tracklist({renderList, addremove}){


    const tracks = []

    if (renderList && renderList.length){

    for (let track of renderList) {
        tracks.push
            (<div className={styles.listItem}>
                <Track trackData={track}/>
                <button className={styles.addRemove}
                trackData={track}
                onClick={() => addremove(track)}

                >+/-</button>
            </div>
            )
    }
}


    return(
        <div>
            <h5>Track list</h5>
            {tracks}
        </div>
    )
}