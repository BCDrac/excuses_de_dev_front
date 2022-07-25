import React from 'react';
import error from '../asset/images/error.gif';

/**
 * The page whenever the user entenr an invalid URL.
 * 
 * @returns the view of the error page
 * 
 * @author Cecile
 */
const ErrorView = () => {

    return (

        <div className="flex flex-col items-center">
            <h2 className="font-bold text-center mt-20">

                <span className="mt-5 block text-4xl m-2">404 error : page not found</span>
                <img
                    src={error}
                    alt=""
                    className="m-10"
                />
            </h2>
        </div>
    );
}

export default ErrorView;