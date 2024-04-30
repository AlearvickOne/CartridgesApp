import { FormDataNamingOrderClass } from "@/constants/constants";
import { findEndFileInArray } from "@/utils/findEndFileInArray";
import { sizeFilesConverter } from "@/utils/sizeFilesConverter";
import { transliterateFiles } from "@/utils/transliterateFiles";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

export const InputSetFiles = ({ setFile }) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  const endFile = findEndFileInArray(acceptedFiles)[0];
  const nameFile = transliterateFiles(endFile);
  const sizeFile = sizeFilesConverter(endFile);

  useEffect(() => {
    const formdata = new FormData();
    formdata.append(FormDataNamingOrderClass.NAME_FILES_IMG_ORDER, endFile);
  }, [endFile]);

  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="p-2 border-2 text-center cursor-pointer w-[25rem] rounded-xl mb-2"
      >
        <input {...getInputProps({ name: FormDataNamingOrderClass.NAME_FILES_IMG_ORDER })} />

        <p>
          {isDragActive
            ? "Отпустите файл для загрузки"
            : endFile === undefined
            ? "Нажмите или перетащите для загрузки фото"
            : endFile !== undefined && (
                <li>
                  {nameFile} - {sizeFile}
                </li>
              )}
        </p>
      </div>
    </div>
  );
};
