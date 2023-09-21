import { useRef } from "react";
import { url, url_dev_backend } from "../url";

type HTML_inner = {
  __html: string;
};

function PreviewDiv({ files }: { files: File[] }) {
  const divParentPreview = useRef<HTMLDivElement>(null);

  const sentBufferData = async (fileData: File) => {
    const formData = new FormData();

    formData.append(`files_save`, fileData);

    const data = await fetch(`${url_dev_backend}/api/upload`, {
      method: "POST",
      body: formData,
    });

    const json: {
      assets_id: string;
    } = await data.json();

    return json;
  };


  return (
    <div>
      {files.map((file: File, index: number) => {
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;
        let templateHTML: HTML_inner;

        fileReader.addEventListener("load", async () => {
          const assets_idValue = await sentBufferData(file);
          const fileResult = fileReader.result;
          templateHTML = {
            __html: `
              <div class="${id} flex items-center gap-[10px] p-[10px] border-solid border-[1px] border-white">
                <img class="w-[124px] h-14" src=${fileResult} alt="" />
                <div className="">
                  <span> ${file.name} </span>
                </div>
                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="${url}/product/data/${assets_idValue.assets_id}" target="__blank"> Mira tu imagen</a>
              </div>
            `,
          };

          if (divParentPreview.current) {
            divParentPreview.current.innerHTML += templateHTML.__html;
          }
        });
        fileReader.readAsDataURL(file);


        return (
          <div className="mt-3" ref={divParentPreview} key={index}>
            {" "}
          </div>
        );
      })}
    </div>
  );
}

export default PreviewDiv;
