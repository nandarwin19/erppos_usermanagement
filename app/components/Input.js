import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({
  labelText,
  required,
  disable,
  className,
  type,
  placeholder,
  value,
  name,
  onChange,
  id,
  error,
}) => {
  return (
    <React.Fragment>
      {labelText ? (
        <div className="p-1 ">
          <label className="text-xs text-gray-200">{labelText}</label>
          {required === true && (
            <span className="text-red-500 ml-1">*</span>
          )}{" "}
          {error ? (
            <label className="text-xs text-red-700 pt-0 mt-0">
              ( {error} )
            </label>
          ) : null}
        </div>
      ) : null}
      <div className="relative overflow-hidden">
        <input
          className={`block w-full bg-main text-gray-200 text-sm focus:outline-none overflow-auto h-10 px-4 ${
            className ? className : null
          }  rounded-lg focus:shadow-inner border ${
            error ? "border-red-400 bg-red-100" : "border-0 bg-main"
          } ${required ? "required" : ""}`}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          id={id}
          autoComplete="off"
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
