import React, { createContext, useContext } from "react";
import loginimg from "../../assets/others/Illustration.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { user } = useContext(AuthContext);
  const { createUser, profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  // console.log(user);
  const navigate = useNavigate();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        profileUpdate(data.name, data.photo)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            axios
              .post("http://localhost:7000/user", saveUser)
              .then((res) => {
                if (res.data.insertedId) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
                // console.log(res);
              })
              .catch((err) => {
                console.log(err);
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
      })
      .catch((error) => console.log(error));
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
            <h1 className="text-5xl font-bold">Sign Up!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    name is required
                  </p>
                )}
              </div>
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
                    minLength: 8,
                    // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600" role="alert">
                    password must be 8 character
                  </p>
                )}
                {/* {errors.password?.type === "pattern" && (
                  <p className="text-red-600" role="alert">
                    password must have one uppercase , one special, one digits,
                    one lowercase character
                  </p>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                  {...register("photo", {
                    required: true,
                  })}
                />
                {errors.file?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    photo url is required
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#d9b783]">Sign Up</button>
              </div>
              <p className="my-2 text-[#d9b783]">
                Already have an account please,
                <Link
                  to="/login"
                  className="text-blue-600 underline font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
