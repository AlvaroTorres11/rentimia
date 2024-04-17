import { useState, useCallback, useRef } from "react";
import { getZipCodeData } from "../../../../../services/mexicoZipCodes";

export function useZipCode() {
  const [dataZipCode, setDataZipCode] = useState({});
  const previousSearch = useRef(null);

  const getInfoZipCode = useCallback(async ({ zipCode }) => {
    if (zipCode === previousSearch.current) return;

    try {
      previousSearch.current = zipCode;
      const responseServiceMexicoZipCodes = await getZipCodeData({ zipCode });
      if (!responseServiceMexicoZipCodes.zip_codes) {
        setDataZipCode({});
        throw new Error("Código postal no encontrado");
      }
      setDataZipCode(responseServiceMexicoZipCodes);
    } catch (error) {
      return error.message;
    }
  }, []);

  return {
    dataZipCode,
    getInfoZipCode,
  };
}
