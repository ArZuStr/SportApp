 const addNewUserDetails = () => {
    const db=firebase.firestore ();
    db.collection ("Users").add ({
            age:  age,
            email: email,
            lastname: lastname,
            location: location,
             name: name,
             password: password,
             preference: preference,
             username: username,
    }).then( () => {
        console.log("New user added successfully");
     }).catch ((err) => {
         console.log ("error occurred while adding new user");
     }
 }