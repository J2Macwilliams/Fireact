import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: REACT_APP_APP_ID,
	measurementId: REACT_APP_MEASUREMENT_ID
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
	}
  // *** Auth API ***
  // Register
	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

    // Login
	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

    // SignOut
	doSignOut = () => this.auth.signOut();

  // Password Reset
	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  // Change Password
	doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;
