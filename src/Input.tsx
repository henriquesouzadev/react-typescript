import React from 'react'

type InputProps = React.ComponentProps<"input"> & {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div style={props.style}>
      <label htmlFor={props.id}>{label}</label>
      <input type="text" {...props} /> 
    </div>
  )
}

export default Input