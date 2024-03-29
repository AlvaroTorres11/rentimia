import { useField } from "formik";

export function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col text-start">
      <label
        className="text-sm font-principal-medium quaternaryColor"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className={`input input-bordered w-full max-w-xs ${
          meta.error && meta.touched ? "input-error" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className="text-red-500 text-xs font-principal-light">
          {meta.error}
        </span>
      ) : null}
    </div>
  );
}
