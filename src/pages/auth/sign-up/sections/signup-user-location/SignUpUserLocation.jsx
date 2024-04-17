import { InputField, SelectField } from "../../../../../common/FormComponents";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useMemo, useCallback, useEffect, useState } from "react";
import { useZipCodeValidation } from "./useZipCodeValidation";
import debounce from "just-debounce-it";
import { useZipCode } from "./useZipCode";

export default function SignUpLocation({
  saveDataInLocalStorage,
  getDataFromLocalStorage,
}) {
  const { zipCode, setZipCode, zipError, firstUpdate } = useZipCodeValidation();
  const { dataZipCode, getInfoZipCode } = useZipCode({ zipCode });
  const [locationDataLoaded, setLocationDataLoaded] = useState(false);
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    const locationDataLocalStorage = getDataFromLocalStorage("location-data");
    if (locationDataLocalStorage) {
      console.log(locationDataLocalStorage);
      setLocationData(locationDataLocalStorage);
    }
    setLocationDataLoaded(true);
  }, [getDataFromLocalStorage]);

  const handleZipCodeChange = (e) => {
    const newZipCode = e.target.value;
    console.log(newZipCode);
    setZipCode(newZipCode);
    if (e.target.value.length === 5) {
      debounceGetZipCode({ newZipCode });
    }
  };

  const debounceGetZipCode = useCallback(
    debounce(({ newZipCode }) => {
      getInfoZipCode({ zipCode: newZipCode });
    }, 2000),
    []
  );

  const coloniasOptions = useMemo(() => {
    return dataZipCode.zip_codes?.map((colonia) => {
      return (
        <option key={colonia.d_asenta} value={colonia.d_asenta}>
          {colonia.d_asenta}
        </option>
      );
    });
  }, [dataZipCode.zip_codes]);

  return (
    <>
      {locationDataLoaded && (
        <Formik
          initialValues={{
            cp: "",
            estado: "",
            municipio: "",
            colonia: "",
            calle: locationData.calle || "",
            num_ext: locationData.num_ext || "",
            num_int: locationData.num_int || "",
          }}
          validationSchema={Yup.object({
            colonia: Yup.string().required("Debes seleccionar una colonia"),
            calle: Yup.string().required("Debes ingresar una calle"),
            num_ext: Yup.number()
              .min(1, "El número exterior debe ser mayor a 0")
              .required("Debes ingresar un número exterior"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            try {
              const dataForSave = {
                cp: zipCode,
                estado: dataZipCode.zip_codes[0].d_estado,
                municipio: dataZipCode.zip_codes[0].d_mnpio,
                colonia: values.colonia,
                calle: values.calle,
                num_ext: values.num_ext,
                num_int: values.num_int,
              };

              console.log("dataForSave", dataForSave);

              saveDataInLocalStorage({
                key: "location-data",
                data: dataForSave,
                expirationMinutes: 40,
              });
            } catch (error) {
              console.log(
                "Error al guardar los datos en el local storage",
                error
              );
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col text-start">
              <label
                className="text-sm font-principal-medium quaternaryColor"
                htmlFor="cp"
              >
                Código Postal
              </label>

              <input
                className={`input input-bordered w-full max-w-xs min-w-max ${
                  zipError && firstUpdate ? "input-error" : ""
                }`}
                value={zipCode}
                onChange={handleZipCodeChange}
                required
              />

              {firstUpdate && zipError ? (
                <span className="text-red-500 text-xs font-principal-light">
                  {zipError}
                </span>
              ) : null}
            </div>

            <InputField
              label="Estado"
              name="estado"
              type="text"
              placeholder=""
              readOnly
              disabled
              value={
                dataZipCode.zip_codes?.length > 0
                  ? dataZipCode.zip_codes[0].d_estado
                  : ""
              }
            />
            <InputField
              label="Municipio / Alcaldía"
              name="municipio"
              type="text"
              placeholder=""
              readOnly
              disabled
              value={
                dataZipCode.zip_codes?.length > 0
                  ? dataZipCode.zip_codes[0].d_mnpio
                  : ""
              }
            />
            <SelectField label="Colonia" name="colonia">
              <option value="" disabled>
                Selecciona una colonia
              </option>
              {coloniasOptions?.length > 0 ? (
                coloniasOptions
              ) : (
                <option value="" disabled>
                  No hay colonias disponibles
                </option>
              )}
            </SelectField>

            <InputField
              label="Calle"
              name="calle"
              type="text"
              placeholder="Calle 25 de abril"
            />

            <InputField
              label="Núm. Exterior"
              name="num_ext"
              type="text"
              placeholder="1"
            />
            <InputField
              label="Num. Interior (opcional)"
              name="num_int"
              type="text"
              placeholder="S/N"
            />

            <button
              className="btn primary-color-300 w-full font-principal-semibold secondary-text-color"
              type="submit"
            >
              Crear cuenta
            </button>
          </Form>
        </Formik>
      )}
    </>
  );
}
