import { useDropzone } from "react-dropzone";
import { transliterate } from "transliteration";

export const InputSetFiles = () => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  const endFile = acceptedFiles.filter((file) => file === acceptedFiles[acceptedFiles.length - 1]);

  let size = 0;

  if (endFile[0] !== undefined)
    if (endFile[0]!.size >= 1000) size = Math.round(endFile[0].size / 1000);

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
                  {endFile[0].name} - {size} KB
                </li>
              )}
        </p>
      </div>
    </div>
  );
};
