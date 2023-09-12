import React, { useRef, useState } from "react";
import PreviewDiv from "./PreviewDiv";
import { url_dev_backend } from '../../url'

function DragArea() {
  // const ref_$file = useRef<HTMLInputElement>(null)
  const $label = useRef<HTMLLabelElement>(null);
  const $svg = useRef<SVGSVGElement>(null);
  const $h2 = useRef<HTMLHeadingElement>(null);
  const $p = useRef<HTMLParagraphElement>(null);

  const [file, setFile] = useState<FileList[] | null>(null);

  // function processFile(files: FileList[]) {
  //   setFile(files);
  //   setTimeout(() => {
  //     setFile(null);
  //   }, 2000);
  // }

  // function showFiles(files: FileList[]) {
  //   if (files.length === 1) {
  //     processFile(files);
  //   } else {
  //     processFile(files);
  //   }
  // }



  const sentBufferData = (arrayFiles: File[], length: number ) => {
    const formData = new FormData();

    for (let index = 0; index < length; index++) {
      const file = arrayFiles[index]
      console.log(file, length)
      
      formData.append(`files_save`, file) 
      console.log(formData.get("file-0"))
    }

    fetch(`${url_dev_backend}/api/upload`, {
      method: "POST", 
      body: formData
    })
  }  

  // function uploadFiles(files: FileList) {

  //   if (files.length === 1) {
  //     sentBufferData(Array.from(files), files.length)
      
  //   } else {
  //     console.log("bastantes archivos");
  //   }
  // }

  const sent_fileorFiles = (event: React.ChangeEvent) => {
    const $inputFile = event.target as HTMLInputElement;
    event.preventDefault();

    // if ($inputFile.files) {
    //   const contentFiles = $inputFile.files
    //   sentBufferData(Array.from(contentFiles), contentFiles.length) 
    // }
  };

  const sent_filesDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if ($p.current) {
      $p.current.textContent =
        "Carga o drag & drop tus archivos SVG, PNG, JPG.";
      $p.current?.classList.remove("font-bold");
    }

    // if (event.dataTransfer.files) {
    //   const contentFiles =event.dataTransfer.files 
    //   sentBufferData(Array.from(contentFiles), contentFiles.length)        
    // }
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
      {file && <PreviewDiv />}
    </>
  );
}

export default DragArea;
