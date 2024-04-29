import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const InputSetFiles = () => {
  const onDrop = useCallback((acceptedFiles) => {
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    };
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className="p-2 border-2 text-center cursor-pointer w-[26rem] hover:border-red-200 rounded-xl"
    >
      <input {...getInputProps()} />

      <p>
        {isDragActive ? "Отпустите файл для загрузки" : "Нажмите или перетащите для загрузки фото"}
      </p>

      <ul>{}</ul>
    </div>
  );
};
