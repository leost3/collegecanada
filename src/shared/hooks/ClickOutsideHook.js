import { useEffect } from "react";

export const useHandleClickOutside = (ref, callback) => {
  const handleClickOutside = () => {
    if (ref && ref.current) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
};

// function useCloseDropdownHook(ref, callback) {
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback()
//       }
//     }
//     useEffect(() => {
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     });
//   }
