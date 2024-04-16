import { useState, useEffect, useRef } from "react";

export function useZipCodeValidation() {
  const [zipCode, setZipCode] = useState("");
  const firstUpdate = useRef(true);
  const [zipError, setZipError] = useState(null);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = zipCode === "";
      return;
    }

    if (zipCode.length < 5 || zipCode.length > 5) {
      setZipError("El Código Postal debe tener 5 caracteres");
      return;
    }

    setZipError(null);
  }, [zipCode]);

  return {
    zipCode,
    setZipCode,
    zipError,
    firstUpdate,
  };
}
