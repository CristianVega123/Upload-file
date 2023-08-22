import { useRef, useState, useEffect } from "react";
import { url, url_dev_backend } from "../../url";
import {
  Button,
  Link,
} from "@nextui-org/react";
import Layout from "../Layout/Layout";

interface IFormData {
  file: File;
  idFile: string;
}

interface IDataAll {
  id_storage: string;
  name_file_before: string;
  name_file_save: string;
}

type SetOfIDataAll = {
  data: IDataAll[];
};


export default function App() {
  const ref_file = useRef<HTMLInputElement>(null);
  const ref_AnchorData = useRef<HTMLAnchorElement>(null);
  const [formDataFile, setFormDataFile] = useState<IFormData | null>(null);
  const [dataAll, setDataAll] = useState<SetOfIDataAll | null>(null);

  useEffect(() => {
    const data = async () => {
      const dataFetch = await fetch(`${url_dev_backend}/api/all`);
      const json = await dataFetch.json();

      if (json) {
        setDataAll(json);
      }
    };
    data();
    return () => {};
  }, []);

  console.log(dataAll);
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

  const upload_files = () => {
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
    console.log(ref_AnchorData.current);
    setFormDataFile(null);
  };

  return (
    <Layout>
      <div>
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

    </Layout>
  );
}
