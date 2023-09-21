import { useState, useRef} from 'react'
import { url, url_dev_backend } from "../url";
import {
  Button,
  Link,
} from "@nextui-org/react";


interface IFormData {
  file: File;
  idFile: string;
}

function DragAreaLocal() {
  const ref_file = useRef<HTMLInputElement>(null);
  const ref_AnchorData = useRef<HTMLAnchorElement>(null);
  const [formDataFile, setFormDataFile] = useState<IFormData | null>(null);


  const file_event = () => {
    if (ref_file.current?.files) {
      if (!formDataFile) {
        setFormDataFile({
          file: ref_file.current.files[0],
          idFile: crypto.randomUUID(),
        });
      }
    }
  };

  const upload_files = async () => {
    const dataFormBody = new FormData();

    if (formDataFile) {
      dataFormBody.append("file", formDataFile.file);
      dataFormBody.append("idFile", formDataFile.idFile);
    }

    fetch(`${url_dev_backend}/api/upload`, {
      method: "POST",
      body: dataFormBody,
    });

    if (ref_AnchorData.current && ref_file.current) {
      ref_AnchorData.current.href = `${url}/api/data/${formDataFile?.idFile}`;
      ref_AnchorData.current.textContent = "Ver el enlace";
      ref_file.current.value = "";
    }
    setFormDataFile(null);

    fetch(`${url_dev_backend}/api/all`)
      .then((json) => json.json())
      .then((res) => console.log(res));
  };
  return (
      <div className="">
        <form
          className="min-w-[320px] w-[70%] h-[30vh] gap-5 flex flex-col justify-center items-center"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          // ref={ref_form}
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="file"
            className="leading-8  block w-full text-sm   rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
            onChange={file_event}
            name="file"
            ref={ref_file}
          />
          <Button
            radius="lg"
            className="text-center"
            isDisabled={formDataFile ? false : true}
            onClick={upload_files}
          >
            Enviar
          </Button>
        </form>

        <Link ref={ref_AnchorData} isExternal></Link>
      </div>
  )
}

export default DragAreaLocal