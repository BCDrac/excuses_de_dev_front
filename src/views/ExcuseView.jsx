import React, { useEffect, useState } from 'react';
import ExcuseDisplay from '../components/excuse/ExcuseDisplay';
import Loader from './../shared/components/utils-components/Loader';
import { getRandomExcuse } from './../api/backend/excuse';
import handleHttpError from './../components/error-components/HandleHttpError';

/**
 * View of the main page for the app, showing up an excuse.
 * Also contains a button refreshing the excuse component, showing up another excuse.
 * 
 * @returns the view of the excuse page.
 * 
 * @author Cecile
 */
const ExcuseView = () => {

    const [excuseRandom, setExcuseRandom] = useState([]);
    const [loadingExcuse, setLoadingExcuse] = useState(true);

    useEffect(() => {
        loadRandomExcuse();
    }, [])


    /**
     * Fetches a random excuse in the Backend.
     * Will be loaded in the page with the useEffect() method above.
     */
    const loadRandomExcuse = () => {

        getRandomExcuse().then(response => {
            response.status === 200 && setExcuseRandom(response.data);
            setLoadingExcuse(false);
        })
            .catch((error) => {
                handleHttpError(error)
            })
    }


    return (
        <>
            {loadingExcuse ? <Loader /> :
                <>
                    <ExcuseDisplay excuse={excuseRandom.message} handleClick={loadRandomExcuse} />
                </>
            }
        </>

    );
}

export default ExcuseView;