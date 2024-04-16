import { useState, useEffect } from "react";
import {
  handleSaveDataInLocalStorage,
  handleGetDataFromLocalStorage,
} from "../../../utils/localStorageManagement";

export function useSignUpSection() {
  const [sectionSignUp, setSectionSignUp] = useState(0);

  const handleNextSection = (nextSection) => {
    setSectionSignUp(nextSection);
    handleSaveDataInLocalStorage({
      key: "sectionSignUp",
      data: nextSection,
      expirationMinutes: 40,
    });
  };

  useEffect(() => {
    const sectionSignUp = handleGetDataFromLocalStorage("sectionSignUp");
    //* Restamos para que el usuario vuelva a donde se quedó
    if (sectionSignUp) setSectionSignUp(Number(sectionSignUp) - 1);
    else setSectionSignUp(0);
  }, []);

  return {
    sectionSignUp,
    handleNextSection,
    handleSaveDataInLocalStorage,
    handleGetDataFromLocalStorage,
  };
}
