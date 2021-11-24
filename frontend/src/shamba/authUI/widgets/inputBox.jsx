import React from 'react'

export default function InputBox({ value, label, name, placeholder, type, onChange}) {
    return (
        <div className="form-group flex flex-col w-full ">
    {label && <label className="input-field text-xs mt-1 text-black">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="
      ml-3
      focus:border-light-blue-500 
      focus:ring-1 focus:ring-light-blue-500 
      focus:outline-none text-sm 
      text-black 
      placeholder-gray-500 border 
      border-gray-200 rounded-md 
      py-2 pl-10"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
    )
}

        