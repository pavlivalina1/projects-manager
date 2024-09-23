import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextArea = false, label, id, ...props }, ref) {
  const classes =
    "p-1 bg-stone-200 text-stone-600 rounded-sm border-b-2 border-solid border-stone-300 focus:outline-none focus:border-stone-800";
  return (
    <p className="flex flex-col gap-1 mt-4">
      <label
        htmlFor={id}
        className="uppercase text-stone-500 font-bold text-sm"
      >
        {label}
      </label>
      {isTextArea ? (
        <textarea {...props} className={classes} ref={ref}/>
      ) : (
        <input {...props} id={id} className={classes} ref={ref}/>
      )}
    </p>
  );
})

export default  Input;