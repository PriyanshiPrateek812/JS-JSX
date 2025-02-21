// with JSX
// const User = () => {
//     return(
//         <div>
//             <h1>Welcome User</h1>
//         </div>
//     )
// }
// export default User;


// without JSX
import React from 'react';
const User = () => {
    return(
        React.createElement(
            'div', //tag name
            null, // no props(=properties) for div tag (that is no attritubes)
            React.createElement(
                'h1', //tag name
                null, // no props(=properties) for h1 tag (that is no attritubes)
                'Welcome User' // content of h1 tag
            )
        )
    )
}
export default User;
