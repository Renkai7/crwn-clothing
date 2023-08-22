import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDoctRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div className="sign-in">
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}>Sign in with Google popup</button>
		</div>
	);
};

export default SignIn;
