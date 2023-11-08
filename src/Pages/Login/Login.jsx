import React, { useContext } from "react";
import loginimg from "../../assets/others/Illustration.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const { signInUser, loginWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const handleGoogleLogin = () => {
    // console.log(typeof loginWithGoogle);

    loginWithGoogle()
      .then((result) => {
        const loggedUser = result?.user;
        // console.log(loggedUser);
        axios
          .post("http://localhost:7000/user", {
            name: loggedUser?.displayName,
            email: loggedUser?.email,
          })
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign Up Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="md:my-10">
      <div className="hero min-h-screen bg-base-200 flex justify-center items-center md:gap-10">
        <div>
          <img src={loginimg} alt="" />
        </div>
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    // minLength: 8,
                    // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    password is required
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#d9b783]">Login</button>
              </div>
              <p className="my-2 text-[#d9b783]">
                Don't have any account please,{" "}
                <Link
                  to="/register"
                  state={from}
                  className="text-blue-600 underline font-medium"
                >
                  Sign Up
                </Link>
              </p>
              <p className="text-center font-light">Or sign in with</p>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-circle btn-outline mx-auto"
              >
                <FaGoogle />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
