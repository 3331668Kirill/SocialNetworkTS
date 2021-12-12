import React, {useEffect, useState} from "react";
import axios from "axios";
import {Preloader} from "../common/Preloader";

export const News = () => {
    const [photos, setPhotos] = useState<Array<any>>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [fetching, setFetching] = useState<boolean>(true)

    useEffect(() => {
        if (fetching){
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_pages=${currentPage}`)
            .then(responce => {
                setPhotos([...photos,...responce.data])
                setCurrentPage(p => p + 1)
            })
                .finally(()=>setFetching(false))
        }

    }, [fetching])

    useEffect(() => {
            document.addEventListener('scroll', scrollHandler)
            return function () {
                document.removeEventListener('scroll', scrollHandler)
            }
        }, [])


    const scrollHandler = (e:any) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop+window.innerHeight) < 100
        && photos.length < 5000){
            setFetching(true)
        }
        // console.log('scrollHeight', e.target.documentElement.scrollHeight)
        // console.log('scrollTop', e.target.documentElement.scrollTop)
        // console.log('innerHeight', window.innerHeight)
    }


    return (<>
            <div>NEWS</div>
            <Preloader isFetching={fetching}/>
            <div>
                {photos.map(ph => <div>
                        <div> {ph.title}  </div>
                        <img src={ph.thumbnailUrl}/>
                    </div>
                )}
            </div>
        </>
    )
}