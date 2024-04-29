import { useDropzone } from "react-dropzone";

export const InputSetFiles = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className="p-2 border-2 text-center cursor-pointer w-[20rem] hover:border-red-200 rounded-xl"
    >
      <input {...getInputProps()} />

      <p>
        {isDragActive ? "Отпустите файл для загрузки" : "Нажмите или перетащите для загрузки фото"}
      </p>

      <ul>
        <li key={file.path}>
          {file.name} - {file.size} bytes
        </li>
      </ul>
    </div>
  );
};
