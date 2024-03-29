import { useField } from "formik";

export function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col text-start">
      <label className="text-sm" htmlFor={props.id || props.name}>
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
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
}
