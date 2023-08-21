import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { url, url_dev_backend } from "../../../url";
import { Button } from "@nextui-org/react";

interface IFormData {
  file: File;
  idFile: string
}

export default function App() {
  const ref_file = useRef<HTMLInputElement>(null);
  const ref_form = useRef<HTMLFormElement>(null);
  const ref_linkToData = useRef<HTMLParagraphElement>(null);
  const ref_AnchorData = useRef<HTMLAnchorElement>(null);
  const [formDataFile, setFormDataFile] = useState<IFormData | null>(null)
  // const formDataFile = new FormData();


  const file_event = () => {
    if (ref_file.current?.files) {

      if (!formDataFile) {
        setFormDataFile({
          file: ref_file.current.files[0],
          idFile: crypto.randomUUID()
        })
      }  
      console.log(ref_file.current.files[0]);


    }
  };

  const upload_files = () => {
    // event.preventDefault();
    const  dataFormBody = new FormData()
    if (formDataFile) {
      dataFormBody.append("file", formDataFile.file) 
      dataFormBody.append("idFile", formDataFile.idFile)
    }
    fetch(`${url_dev_backend}/api/upload`, {
      method: "POST",
      body: dataFormBody,
    });

    if (ref_AnchorData.current) {
      ref_AnchorData.current.href = `${url}/api/data/${formDataFile?.idFile}`;
      ref_AnchorData.current.textContent = "hga click";
    }

    setFormDataFile(null)

  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        ref={ref_form}
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" onChange={file_event} name="file" ref={ref_file} />
      </form>
      <Button isDisabled={formDataFile ? false : true} onClick={upload_files}>
        Enviar
      </Button>

      <p ref={ref_linkToData}></p>
      <Link ref={ref_AnchorData} to={""}></Link>
    </>
  );
}


