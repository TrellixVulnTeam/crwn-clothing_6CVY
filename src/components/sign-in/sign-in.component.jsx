import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButon from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const { value, name } = e.target; 

        this.setState({ [name] : value })
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label="email"
                    required 
                    />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="password"
                    required
                     />
                     <div className='buttons'>
                        <CustomButon type="submit"> Sign in </CustomButon>
                        <CustomButon onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButon>
                     </div>
                </form>
            </div>
        )
    }
}

export default SignIn;