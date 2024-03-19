import React from 'react'
import styles from './tracklist.module.css'
import Track from '../Track/Track'




export default function Tracklist({renderList, onClickHandler, addremove}){


    const tracks = []

    if (renderList && renderList.length){

    for (let index = 0; index < renderList.length; index++) {
        const track = renderList[index];
        tracks.push
            (<div className={styles.listItem} key={index}>
                <Track trackdata={track}/>
                <button className={styles.addRemove}
                trackdata={track}
                onClick={() => onClickHandler(track)}

                >{addremove}</button>
            </div>
            )
    }
}


    return(
        <div>
            {tracks}
        </div>
    )
}