import React, { useRef, useState } from "react";
import PreviewDiv from "./PreviewDiv";

function DragArea() {
  const $label = useRef<HTMLLabelElement>(null);
  const $svg = useRef<SVGSVGElement>(null);
  const $h2 = useRef<HTMLHeadingElement>(null);
  const $p = useRef<HTMLParagraphElement>(null);

  const [fileArray, setFileArray] = useState<File[] | null>(null);




  const sent_fileorFiles = (event: React.ChangeEvent) => {
    const $inputFile = event.target as HTMLInputElement;
    event.preventDefault();

    if ($inputFile.files) {
      const contentFiles = $inputFile.files
      setFileArray(Array.from(contentFiles))
    }
  };

  const sent_filesDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if ($p.current) {
      $p.current.textContent =
        "Carga o drag & drop tus archivos SVG, PNG, JPG.";
      $p.current?.classList.remove("font-bold");
    }

    if (event.dataTransfer.files) {
      const contentFiles =event.dataTransfer.files 
      setFileArray(Array.from(contentFiles))
    }
  };

  return (
    <>
      <div className="relative ">
        <label
          ref={$label}
          htmlFor="dropzone-file"
          className="mx-auto cursor-pointer flex w-[25vw] min-w-[370px] flex-col items-center rounded-xl border-2 border-dashed border-blue-400 p-6 text-center bg-white"
          onDragOver={() => {
            $label.current?.classList.add("drag-over");
            $h2.current?.classList.add("drag-over-color");
            $p.current?.classList.add("drag-over-color");
            $p.current?.classList.add("font-bold");
            if ($p.current) {
              $p.current.textContent = "Suelta tus archivos";
            }
          }}
          onDragLeave={() => {
            $label.current?.classList.remove("drag-over");
            $h2.current?.classList.remove("drag-over-color");
            $p.current?.classList.remove("drag-over-color");
            $p.current?.classList.remove("font-bold");
            if ($p.current) {
              $p.current.textContent =
                "Carga o drag & drop tus archivos SVG, PNG, JPG.";
            }
          }}
          onDrop={sent_filesDrop}
        >
          <svg
            ref={$svg}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>

          <h2
            ref={$h2}
            className="mt-4 text-xl font-medium text-gray-700 tracking-wide"
          >
            Upload File
          </h2>

          <p ref={$p} className="mt-2 text-gray-500 tracking-wide">
            Carga o drag & drop tus archivos SVG, PNG, JPG.
          </p>

          <input
            id="dropzone-file"
            type="file"
            accept="image/png, image/jpeg"
            className="w-full h-[150px] opacity-0 absolute"
            onChange={sent_fileorFiles}
            multiple
          />
        </label>
      </div>
      {fileArray && <PreviewDiv files={fileArray} />}
    </>
  );
}

export default DragArea;
