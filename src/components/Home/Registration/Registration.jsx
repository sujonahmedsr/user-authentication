import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../assets/AuthProvider/AuthProvider";
import { GrHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";

const Registration = () => {
    const [regError, setResError] = useState(null);
    const [resSuccess, setResSuccess] = useState(null);

    const [show, setShow] = useState(false)

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate()


    



    const handleRegistration = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);

        setResSuccess('')
        setResError('')

        if (password.length < 6) {
            setResError('Password should be at least 6 characters')
            return
        }else if(!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password)){
            setResError('Your password should be one uppercase, on lowercase, on number and symble.')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setResSuccess('User Created Successfully')
            })
            .catch(error => {
                console.log(error);
                setResError('email-already-in-use')
            })

        e.target.reset();
        navigate('/')



        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result.user);
        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //     })
    }

    return (
        <div className="py-20">
            <div>
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100 container mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                        <p className="text-sm text-gray-400">Sign Up to access your account</p>
                    </div>
                    <form onSubmit={handleRegistration} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm">Name</label>
                                <input type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                            </div>
                            <div className="relative">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm" >Password</label>
                                </div>
                                <input type={show ? 'text' : 'password'} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 relative" required maxLength={8}/>
                                <span className="absolute text-2xl cursor-pointer top-1/2 right-2" onClick={()=>setShow(!show)}>{show ?  <BiShow></BiShow> : <GrHide></GrHide>}</span>
                            </div>

                            {
                                regError && <p className="text-red-700">{regError}</p>
                            }

                        </div>
                        <div className="space-y-2">
                            <div>
                                <input className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 cursor-pointer" type="submit" value="Sign up" />
                            </div>
                            <p className="px-6 text-sm text-center text-gray-400">Already have an account ?
                                <Link to={'/login'} className="hover:underline text-violet-400">Sign in.</Link>
                            </p>
                        </div>
                    </form>
                    {
                        resSuccess && <p className="text-green-700">{resSuccess}</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Registration;