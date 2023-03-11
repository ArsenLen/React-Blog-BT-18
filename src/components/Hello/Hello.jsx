import React from 'react';

const Hello = ({name, age}) => {
    // console.log(props)
    return (
        <>
            <p>
                Hello {name}
            </p>
            <p>
                Age {age}
            </p>
        </>
    );
};

export default Hello;