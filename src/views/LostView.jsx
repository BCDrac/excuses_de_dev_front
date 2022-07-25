import React, { useEffect, useState } from 'react';
import lost from '../asset/images/lost.gif';
import { useNavigate } from 'react-router-dom';
import { URL_HOME } from '../shared/constants/urls/urlConstants';

/**
 * The page whenever the user goes to the "lost" URL.
 * A simple text "I'm lost" with an animated gif
 * 
 * @returns the view of the Lost page
 * 
 * @author Cecile
 */
const ErrorView = () => {

    const [counter, setCounter] = useState(5);
    const navigate = useNavigate();

    /**
     * On page load : a countdown starts from 5 ( useState(5) ). 
     * Once it reaches 0, the user is redirected to the home page (URL_HOME)
     */
    useEffect(() => {

        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

        if (counter === 0) {
            navigate(URL_HOME)
        }
    }, [counter, navigate]);


    return (

        <div className="flex flex-col items-center">
            <h2 className="font-bold text-center mt-20">

                <span className="mt-5 block text-4xl m-2">I'm lost</span>
                <img
                    src={lost}
                    alt=""
                    className="m-10"
                />
            </h2>
        </div>
    );
}

export default ErrorView;