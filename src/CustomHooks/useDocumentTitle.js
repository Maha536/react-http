import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title = 'Clicked '+count
    })
}

export default useDocumentTitle
