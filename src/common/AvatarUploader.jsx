import { FileDrop } from "react-file-drop";

function AvatarUploader({ userAvatar, setUserAvatar }) {
  async function loadUserAvatar(file) {
    setUserAvatar(file);
    alert("subido", file);

    // Crear una URL local para la vista previa de la imagen
    const reader = new FileReader();
    reader.onload = (e) => {
      const previewURL = e.target.result;
      // Mostrar la vista previa de la imagen
      document.getElementById("image-preview").src = previewURL;
    };
    reader.readAsDataURL(file);
  }
  return (
    <FileDrop
      onDrop={(files, event) => loadUserAvatar(files[0])}
      className="h-[100px] flex justify-center items-center outline-dotted rounded-md"
    >
      <div>
        {userAvatar !== null ? (
          <div className="h-full rounded-full flex flex-col items-center justify-center">
            <img
              id="image-preview"
              className="w-[80px] h-[80px] rounded-full object-cover"
              src={userAvatar ? URL.createObjectURL(userAvatar) : ""}
              alt="Foto de perfil"
            />
          </div>
        ) : (
          <div className="flex flex-col p-9 items-center text-center justify-center">
            <i className="ti ti-upload block text-3xl"></i>
            <span className="font-principal-medium text-sm">
              Arrastra tu foto
              <u className="hover:cursor-pointer">
                {" "}
                o da clic aquí para seleccionar
              </u>
            </span>
            <span className="text-xs">Peso max. 4MB (jpg, png y jpeg)</span>
          </div>
        )}
      </div>
    </FileDrop>
  );
}

export default AvatarUploader;
