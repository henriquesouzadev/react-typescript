import React from 'react'

type ButtonProps = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

const Button = ({ total, setTotal }: ButtonProps) => {
  return (
    <button onClick={() => setTotal(total => total + 1)}>
      Incrementer {total}
    </button>
  )
}

export default Button