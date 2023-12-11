/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";



const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const {createUser,updateUserProfile}=useContext(AuthContext);
const navigate=useNavigate();


  const onSubmit = (data) => {
  
    createUser(data.email,data.password)
    .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);

        updateUserProfile(data.name,data.photoURL)
        .then(()=>{
          const saveUser={name:data.name, email:data.email}
          fetch('https://bistro-boss-server-shahadoth-ali.vercel.app/users',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
            }
          })

        
        })
        .catch(error=>console.log(error))
    })
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* this is name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* this is photo url field */}
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL")}             
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div> */}
              {/* this is email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* this is password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  // { required: true,
                  //     minLength:6,
                  //      maxLength: 20,
                  //     pattern:/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])$/ })}

                  placeholder="password"
                  className="input input-bordered"
                  required
                  // {...errors.password?.type === "required" &&
                  //   <p className="text-red-600">Password is required</p>
                  // }
                  // {...errors.password?.type === "minLength" &&
                  //   <p className="text-red-600">Password must be 6 characters</p>
                  // }
                  // {...errors.password?.type === "maxLength" &&
                  //   <p className="text-red-600">Password must be less than 20 characters</p>
                  // }
                  // {...errors.password?.type === "pattern" &&
                  //   <p className="text-red-600">Password must have one uppercase one lower case one number and special symbol </p>
                  // }
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
            <p><small>Already have an account?<Link to="/login" className="underline">Login</Link></small></p>
          <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
