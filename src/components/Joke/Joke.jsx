import React from 'react';

const Joke = (props) => {
    const { value } = props;
    
    return (
        <div className='col-6 p-5' >
            <div className='text-center' >
                {value}
                 
            </div>
        </div>

    );
};

export default Joke;