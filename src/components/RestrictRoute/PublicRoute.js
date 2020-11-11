import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//     return (
//         <Route {...rest} render={props => (
//             isLogin() && restricted ?
//                 <Redirect to="/dashboard" />
//                 : <Component {...props} />
//         )} />
//     );
// };

// export default PublicRoute;