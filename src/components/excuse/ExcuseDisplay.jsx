import React from 'react';


/**
 * The component showing an excuse fetched from the Backend.
 * 
 * @param {*} excuse the excuse shown up
 * @param {*} handleClick the method passed from the parent for the onClick
 * @returns the component containing the excuse message
 */
const ExcuseDisplay = ({ excuse, handleClick }) => {


    return (

        <div className="flex flex-col justify-center items-center">

            <div className=" bg-sky-200 border-2 border-black md w-80 h-60 p-4 m-4 flex flex-col justify-center items-center overflow-hidden">
                <div className="display: flex align-items: center m-2 items-center">

                    <div>
                        <p className="m-5 text-center">Ma super application</p>

                        <div className=" text-center m-3">
                            {excuse}
                        </div>
                    </div>
                </div>

                <div>
                    <p className="btn border-2 p-1 m-3 border-b-4 text-center text-black  border-black cursor-pointer" onClick={() => {
                        handleClick()
                    }}>Bouton</p>
                </div>
            </div>

        </div>
    )

}

export default ExcuseDisplay;
