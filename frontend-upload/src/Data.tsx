import { useEffect, useRef } from "react";
import { url_dev_backend } from "../url";
import { useParams } from "react-router-dom";

export default function Data() {
  const { hash } = useParams();
  const refImg = useRef() as React.RefObject<HTMLImageElement>;
  useEffect(() => {
    if (hash) {
      const dataJson = async () => {
        const data = await fetch(`${url_dev_backend}/api/data/${hash}`);
        const json = await data.json()
        
        if (refImg.current) {
          refImg.current.src = `data:image/png;base64,${json["file-0"]}` ;
        }
      }
      dataJson()
    }
  }, []);

  return (
    <div>
      <img ref={refImg} src="" alt="" />
    </div>
  )
}
