// Get the current user ID
const userId = firebase.auth().currentUser.uid;

// Get a reference to the user document in Firestore
const userRef = firebase.firestore().collection('user').doc(userId);

// Create a profile view
const profileView = document.createElement('div');

// Populate the profile view with user data
userRef.get().then((doc) => {
    if (doc.exists) {
        const userData = doc.data();
        // Set the appropriate properties of the profile view's elements
        // to the values retrieved from Firestore
        const nameElement = document.createElement('h1');
        nameElement.textContent = userData.name;
        profileView.appendChild(nameElement);

        // const profilePicElement = document.createElement('img');
        // profilePicElement.src = userData.profilePicUrl;
        // profileView.appendChild(profilePicElement);

        const bioElement = document.createElement('p');
        bioElement.textContent = userData.bio;
        profileView.appendChild(bioElement);
    } else {
        console.log("User data not found");
    }
});

// Update the profile view when data changes
userRef.onSnapshot((doc) => {
    if (doc.exists) {
        const userData = doc.data();
        // Update the appropriate properties of the profile view's elements
        // to reflect the updated values in Firestore
        nameElement.textContent = userData.name;
        profilePicElement.src = userData.profilePicUrl;
        bioElement.textContent = userData.bio;
    } else {
        console.log("User data not found");
    }
});
