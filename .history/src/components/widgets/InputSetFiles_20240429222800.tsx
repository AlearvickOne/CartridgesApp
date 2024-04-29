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
    <div className="border-2 text-center cursor-pointer hover:border-red-200">
      <div {...getRootProps({ className: "dropzone" })} className="p-2  w-full">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Отпустите файл для загрузки</p>
        ) : (
          <p>Нажмите или перетащите для загрузки файла</p>
        )}
        <ul>{}</ul>
      </div>
    </div>
  );
};