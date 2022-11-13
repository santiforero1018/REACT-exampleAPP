import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password must be greater than 5 characters"),
    passwordCheck: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Password must match"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const sendForm = (data) => {
    console.log("send data to serve", data);
  };

  console.log({ errors });

  return (
    <div>
      <form onSubmit={handleSubmit(sendForm)}>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email?.message}</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password?.message}</span>
          )}
        </div>
        <div>
          <label>Password check</label>
          <input
            type="password"
            placeholder="Password check"
            {...register("passwordCheck")}
          />
          {errors.passwordCheck && (
            <span style={{ color: "red" }}>
              {errors.passwordCheck?.message}
            </span>
          )}
        </div>

        <button disabled={!isValid}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
