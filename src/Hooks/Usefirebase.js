import React from 'react';
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword,getAuth, updateProfile, signInWithPopup,signOut, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import inisialaization from '../firebase/firebase.init';

inisialaization();

const Usefirebase = () => {
   
      
  const [user,setuser] = useState({}); 
  const [eror,seteror] = useState({}); 
  const [admin,setAdmin] = useState({}); 

  const [isloading, setloading] = useState(true);

  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

//   handle button google

    const signinusingGoogle = () => {
        setloading(true);
       return signInWithPopup(auth,googleprovider)

     

    }

    const logout = () => {
        setloading(true);
        const auth = getAuth();
        signOut(auth)
        .then(() => {
        
        // Sign-out successful.
        })

        .finally(() => setloading(false));

    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
              
                setuser(user);

            }else{
                setuser({})
            }

            setloading(false);

          });
          


    }, [])

    const newAccount = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            setuser(user);
            setUserName(name);
            seteror(''); 

            // databse save
            saveUser(email, name);
            console.log(saveUser);


            console.log(user)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
      };

      // save user to database
   
        

      const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(() => {})
        .catch(() => {});
      }
    

      const newUserLogin = (email, password) => {
        console.log('this is form newUserLogin');
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setuser(user);
           
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message)
          });
      }
 

      const saveUser = (displayName,email) => {
        const user = {  displayName, email };
        fetch('https://warm-hamlet-32240.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    const saveGoogleUser = (displayName, email) => {
      const user = { displayName, email };
      fetch('https://warm-hamlet-32240.herokuapp.com/users', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then()
    }

    useEffect(() => {
      fetch(`https://warm-hamlet-32240.herokuapp.com/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data.admin);
          setAdmin(data.admin);
        })
    }, [user.email])


     


    return{
        user,
        admin,
        setuser,
        signinusingGoogle,
        logout,
        isloading,
        setloading,
        newAccount,
        newUserLogin,
        saveUser,
        saveGoogleUser
      
    }


};

export default Usefirebase;