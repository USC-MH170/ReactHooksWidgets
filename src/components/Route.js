import {useEffect, useState} from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    //Event listener for a change in the link. When link is changed the state is updated and return statement reflected
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    //reflects what the browser address is
    return currentPath === path
    ? children
    : null;
}

export default Route;