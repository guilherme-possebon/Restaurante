import "../Layout/ScssLayout/SignIn.scss"

import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { auth } from "../../../../services/firebase";

export default function Signin() {

    function handleGoogleSignin() {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return (
        <div>
            <button type="button" className="button" onClick={handleGoogleSignin}>
                <FaGoogle/>Entrar com Google
            </button>
        </div>
    )
}