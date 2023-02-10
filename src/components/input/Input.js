import React from 'react';
import { useController } from 'react-hook-form';

const Input = ({control,...props}) => {
  const {field} = useController({
    control,
    name: props.name,
    defaultValue:""
  })
  return (
    <input
      className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem]"
      {...field}
      {...props}
    />
  );
};

export default Input;