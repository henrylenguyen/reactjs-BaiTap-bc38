import React from 'react';
import { useController } from 'react-hook-form';

const Input = ({ control, isUpdate, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className={`w-full py-5 px-10 border-b border-borderColor text-[2rem] ${isUpdate?"bg-gray-800":"bg-transparent"}`}
      {...field}
      {...props}
    />
  );
};

export default Input;