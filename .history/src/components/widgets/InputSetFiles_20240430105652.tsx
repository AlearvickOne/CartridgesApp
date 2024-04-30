import { findEndFileInArray } from "@/utils/findEndFileInArray";
import { sizeFilesConverter } from "@/utils/sizeFilesConverter";
import { transliterateFiles } from "@/utils/transliterateFiles";
import { useDropzone } from "react-dropzone";
import { transliterate } from "transliteration";

export const InputSetFiles = () => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  const endFile = findEndFileInArray(acceptedFiles)[0];
  const nameFile = transliterateFiles(endFile);
  const sizeFile = sizeFilesConverter(endFile);

  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="p-2 border-2 text-center cursor-pointer w-[25rem] rounded-xl mb-2"
      >
        <input {...getInputProps()} />

        <p>
          {isDragActive
            ? "Отпустите файл для загрузки"
            : endFile[0] === undefined
            ? "Нажмите или перетащите для загрузки фото"
            : endFile[0] !== undefined && (
                <li>
                  {nameFile} - {sizeFile}
                </li>
              )}
        </p>
      </div>
    </div>
  );
};
