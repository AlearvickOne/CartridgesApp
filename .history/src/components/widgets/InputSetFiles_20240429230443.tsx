import { useDropzone } from "react-dropzone";

export const InputSetFiles = () => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone();

  const files = acceptedFiles.map(() => {
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>;
    {
      files.length > 1 ? <p>Нельзя добавлять больше 1 фото</p> : "";
    }
  });
  const file = acceptedFiles[0];

  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="p-2 border-2 text-center cursor-pointer w-[20rem] hover:border-red-200 rounded-xl"
      >
        <input {...getInputProps()} />

        <p>
          {isDragActive
            ? "Отпустите файл для загрузки"
            : "Нажмите или перетащите для загрузки фото"}
        </p>
      </div>
      <ul>{file !== undefined && <></>}</ul>
    </div>
  );
};
