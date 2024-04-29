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
      className="p-2 border-2 text-center cursor-pointer hover:border-red-200 "
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <h1 className="text-xl">Нажмите или перетащите для загрузки файла</h1>
      ) : (
        <p className="w-full">Отпустите файл для загрузки</p>
      )}
      <ul>{}</ul>
    </div>
  );
};
