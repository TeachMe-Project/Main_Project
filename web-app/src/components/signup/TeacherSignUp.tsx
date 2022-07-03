import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormInput {
    firstName: String;
    lastName: String;
    mobile: String;
    email: String;
    password: any;
}

export default function TeacherSignup() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <div className="TeacherSignup">
        <div className="LeftTab">
        <img src={require("../../assets/images/signup/teacher.png")} />
    <div className="LeftTabHeader">Let's enjoy teaching with TeachMe</div>

    <div className="Description">
        Already have an account?
        <Link to="#" className="link">
            Log in
            </Link>
            </div>
            </div>
            <div className="RightTab">
    <div className="SignupBody">
    <div className="SignupHeader">Signup as a Teacher</div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="formShortRow">
    <div className="formItem">
        <label>First Name</label>
    <input
    type="text"
    {...register("firstName", {
        required: true,
        maxLength: 20,
        pattern: /^[A-Za-z]+$/i,
    })}
    />
    <div className="formError">
        {errors.firstName &&
                (errors?.firstName as any)?.type == "required" &&
                "First name is required"}
    {errors.firstName &&
    (errors?.firstName as any)?.type == "maxLength" &&
    "First name must be less than 20 characters"}
    {errors.firstName &&
    (errors?.firstName as any)?.type == "pattern" &&
    "First name must have only letters"}
    </div>
    </div>

    <div className="formItem">
        <label>Last Name</label>
    <input
    type="text"
    {...register("lastName", {
        required: true,
        maxLength: 30,
        pattern: /^[A-Za-z]+$/i,
    })}
    />
    <div className="formError">
        {errors.lastName &&
                (errors?.lastName as any)?.type == "required" &&
                "Last name is required"}
    {errors.lastName &&
    (errors?.lastName as any)?.type == "maxLength" &&
    "Last name must be less than 50 characters"}
    {errors.lastName &&
    (errors?.lastName as any)?.type == "pattern" &&
    "Last name must have only letters"}
    </div>
    </div>
    </div>

    <div className="formLongRow">
    <div className="formItem">
        <label>Email</label>
        <input
    type="email"
    {...register("email", {
        required: true,
        pattern:
            /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    })}
    />
    <div className="formError">
        {errors.email &&
                (errors?.email as any)?.type == "required" &&
                "Email address is required"}
    {errors.email &&
    (errors?.email as any)?.type == "pattern" &&
    "Entered Email is invalid"}
    </div>
    </div>
    </div>
    <div className="formShortRow">
    <div className="formItem">
        <label>Mobile Number</label>
    <input
    type="text"
    {...register("mobile", {
        required: true,
        maxLength: 12,
        minLength: 10,
        pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    })}
    />
    <div className="formError">
        {errors.mobile &&
                (errors?.mobile as any)?.type == "required" &&
                "Mobile number is required"}
    {errors.mobile &&
    (errors?.mobile as any)?.type == "maxLength" &&
    "Mobile number must be less than 12 digits"}
    {errors.mobile &&
    (errors?.mobile as any)?.type == "minLength" &&
    "Mobile number must be more than 9 digits"}
    {errors.mobile &&
    (errors?.mobile as any)?.type == "pattern" &&
    "Mobile number entered is invalid"}
    </div>
    </div>

    <div className="formItem">
        <label>Password</label>
        <input
    type="password"
    {...register("password", {
        required: true,
        minLength: 8,
        pattern:
            /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]$/,
    })}
    />
    <div className="formError">
        {errors.password &&
                (errors?.password as any)?.type == "required" &&
                "Password is required"}
    {errors.password &&
    (errors?.password as any)?.type == "minLength" &&
    "Password must contain atleast 8 characters"}
    {errors.password &&
    (errors?.password as any)?.type == "pattern" &&
    "Password must contain atleast 1 Uppercase letter, 1 Lowercase letter, 1 number and 1 special character"}
    </div>
    </div>
    </div>

    {/* <TextInput
      label="Password"
      secureTextEntry={passwordVisible}
      right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
    /> */}

    {/* <div className="formLongRow">
              <div className="formItem">
                <label>Re-enter password</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                  })}
                />
                <div className="formError">
                  {errors.confirmPassword && "Password needs to be matched"}
                </div>
              </div>
            </div> */}

    <div className="submitButton">
    <input type="submit" value="Signup" />
        </div>
        </form>
        </div>
        </div>
    {/* <div className="RightTab">
        <div className="SignupBody">
          <div className="SignupHeader">Signup as a Teacher</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formRow">
              <div className="formItem">
                <label>First Name</label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                <div className="formError">
                  {errors.firstName && "First name is required"}
                </div>
              </div>

              <div className="formItem">
                <label>Last Name</label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: true,
                    maxLength: 30,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                <div className="formError">
                  {errors.lastName && "Last name is required"}
                </div>
              </div>
            </div>

            <div className="formRow">
              <div className="formItem">
                <label>Email</label>
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <div className="formError">
                  {errors.email && "Email name is required"}
                </div>
              </div>

              <div className="formItem">
                <label>Mobile number</label>
                <input
                  type="text"
                  {...register("mobile", { required: true, maxLength: 12, minLength: 10 })}
                />
                <div className="formError">
                  {errors.mobile && "Mobile number is required"}
                </div>
              </div>
            </div>

            <div className="formRow">
              <div className="formItem">
                <label>Password</label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                />
                <div className="formError">
                  {errors.password && "Password is required"}
                </div>
              </div>

              <div className="formItem">
                <label>Re-enter password</label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                />
                <div className="formError">
                  {errors.password && "Password needs to be matched"}
                </div>
              </div>
            </div>

            <div className="formRow">
              <div className="formItem">

                <div className="formError">

                </div>
              </div>
            </div>
            <div className="submitButton">
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div> */}
    </div>
);
}