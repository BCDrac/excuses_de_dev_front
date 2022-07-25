import React from 'react';
import reduxError from '../asset/images/redux-error.png';

/**
 * View of the main page for the app, showing up an excuse.
 * Also contains a button refreshing the excuse component, showing up another excuse.
 * 
 * @returns the view of the excuse page.
 * 
 * @author Cecile
 */
const HttpCodeView = () => {

    return (

        <div className="flex flex-col items-center">
            <h2 className="font-bold text-center mt-20">

                <span className="mt-5 block text-4xl m-2">501 error : not implemented</span>
                <img
                    src={reduxError}
                    alt=""
                    className="m-10"
                />
            </h2>
        </div>
    );
}

export default HttpCodeView;