import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyCB4x04u2EY0kObRcCc_eNE1PV-hC86pfw",
    authDomain: "tiendabd-ddec5.firebaseapp.com",
    databaseURL: "https://tiendabd-ddec5.firebaseio.com",
    projectId: "tiendabd-ddec5",
    storageBucket: "tiendabd-ddec5.appspot.com",
    messagingSenderId: "975264875571",
    appId: "1:975264875571:web:a884333177104890400f46",
    measurementId: "G-JX8H1VMLCE"

}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;