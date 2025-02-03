import React from 'react';

export default class FullPageLoader extends React.Component
{
    render()
    {
        return(

            <div className="flex items-center justify-center vh-100">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }


}

// export default FullPageLoader;