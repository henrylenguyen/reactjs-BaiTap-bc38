import { useEffect, useState } from "react";

export default function useDebounce(initializeValue="",delay=500){
  const [debounce, setDebounce] = useState(initializeValue);
  useEffect(() => {
    //Khởi tạo hàm timer để set lại giá trị debounce
    const timer = setTimeout(()=>{
      setDebounce(initializeValue);
    },delay)
    return () => {
      clearTimeout(timer);
    }
  }, [delay, initializeValue])
  return debounce;
}