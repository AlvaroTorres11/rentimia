import { useField } from "formik";

export function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  const icon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiA5YTMgMyAwIDAgMC0zIDNhMyAzIDAgMCAwIDMgM2EzIDMgMCAwIDAgMy0zYTMgMyAwIDAgMC0zLTNtMCA4YTUgNSAwIDAgMS01LTVhNSA1IDAgMCAxIDUtNWE1IDUgMCAwIDEgNSA1YTUgNSAwIDAgMS01IDVtMC0xMi41QzcgNC41IDIuNzMgNy42MSAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjVzOS4yNy0zLjExIDExLTcuNWMtMS43My00LjM5LTYtNy41LTExLTcuNSIvPjwvc3ZnPg==";

  const handleShowPassword = () => {
    const input = document.querySelector(".input-password");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };
  return (
    <div className="flex flex-col text-start">
      <label
        className="text-sm font-principal-medium quaternaryColor"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      {props.type === "password" ? (
        <div className="relative">
          <img
            src={icon}
            className="w-5 absolute top-3.5 right-9 z-100 hover:cursor-pointer"
            alt="icon"
            onClick={handleShowPassword}
          />

          <input
            className={`input input-bordered w-[100%] max-w-xs input-password ${
              meta.error && meta.touched ? "input-error" : ""
            }`}
            {...field}
            {...props}
          />
        </div>
      ) : (
        <input
          className={`input input-bordered w-full max-w-xs min-w-max ${
            meta.error && meta.touched ? "input-error" : ""
          }`}
          {...field}
          {...props}
        />
      )}

      {meta.touched && meta.error ? (
        <span className="text-red-500 text-xs font-principal-light">
          {meta.error}
        </span>
      ) : null}
    </div>
  );
}
