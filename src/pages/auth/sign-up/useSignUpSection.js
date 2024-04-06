import { useState, useEffect } from "react";
import {
  handleSaveDataInLocalStorage,
  handleGetDataFromLocalStorage,
} from "../../../utils/localStorageManagement";

export function useSignUpSection() {
  const [sectionSignUp, setSectionSignUp] = useState(null);

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

    if (sectionSignUp) setSectionSignUp(Number(sectionSignUp));
    else setSectionSignUp(0);
  }, [sectionSignUp]);

  return {
    sectionSignUp,
    handleNextSection,
    handleSaveDataInLocalStorage,
    handleGetDataFromLocalStorage,
  };
}
