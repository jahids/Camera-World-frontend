import React, { createContext } from 'react';
import Usefirebase from '../Hooks/Usefirebase';

export const AuthContext = createContext();

const Authprovider = (props) => {
   const {children} = props;
   const Allcontext = Usefirebase();

   return(

    <AuthContext.Provider value={Allcontext} >
            {children}
    </AuthContext.Provider>

   )

};

export default Authprovider;