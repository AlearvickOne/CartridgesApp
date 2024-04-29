import { useDropzone } from "react-dropzone";

export const InputSetFiles = () => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: [".png", ".gif", ".jpeg", ".jpg"],
  });

  const endFile = acceptedFiles.filter((file) => file === acceptedFiles[acceptedFiles.length - 1]);

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
      <ul>
        {endFile[0] !== undefined && (
          <li>
            {endFile[0].name} - {endFile[0].size} bytes
          </li>
        )}
      </ul>
    </div>
  );
};
