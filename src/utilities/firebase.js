import firebase from 'firebase/compat/app'; 
import 'firebase/compat/database';
import 'firebase/compat/auth';
import { useObjectVal } from 'react-firebase-hooks/database'; 
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAwrTGYa_0HRnsok4fTgM2PvC-n4f93Uu8",
    authDomain: "scheduler-24f57.firebaseapp.com",
    databaseURL: "https://scheduler-24f57-default-rtdb.firebaseio.com",
    projectId: "scheduler-24f57",
    storageBucket: "scheduler-24f57.appspot.com",
    messagingSenderId: "1018553075601",
    appId: "1:1018553075601:web:ba2ea38764dc88a8873c30"
};

export const useData = (path, transform) => (
    useObjectVal(firebase.database().ref(path), { transform })
);

export const setData = (path, value) => (
    firebase.database().ref(path).set(value)
);

export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

export const signOut = () => firebase.auth().signOut();

export const useUserState = () => useAuthState(firebase.auth());

firebase.initializeApp(firebaseConfig)