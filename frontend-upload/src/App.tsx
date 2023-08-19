import { FormEvent, useRef } from "react";
import { url_dev_backend } from "../url";

function App() {
  const ref_file = useRef<HTMLInputElement | null>(null);
  const ref_form = useRef<HTMLFormElement | null>(null);
  const formDataFile = new FormData();

  const file_event = () => {
    if (ref_file.current?.files) {
      formDataFile.append("file", ref_file.current.files[0]);
      formDataFile.append("idFile", crypto.randomUUID())
      console.log(ref_file.current.files[0]);
    }
  };

  const upload_files = (event: FormEvent) => {
    event.preventDefault()
    if (ref_file.current?.files) {
     console.log(formDataFile.getAll("file")) 
    }
    fetch(`${url_dev_backend}/api/upload`, {
      method: "POST",
      body: formDataFile
    });

    formDataFile.delete("file")
    formDataFile.delete("idFile")
  };

  return (
    <>
      <form
        action=""
        onSubmit={upload_files}
        ref={ref_form}
        method="POST"
        encType="multipart/form-data"
      >
        <input
          type="file"
          onChange={file_event}
          name="file"
          ref={ref_file}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
