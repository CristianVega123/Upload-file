import { useEffect, useRef } from "react";
import { url_dev_backend } from "../../url";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Link } from "@nextui-org/react";
import { url } from '../../url'

export default function Data() {
  const { hash } = useParams();
  const refImg = useRef() as React.RefObject<HTMLImageElement>;
  useEffect(() => {
    if (hash) {
      const dataJson = async () => {
        const data = await fetch(`${url_dev_backend}/api/data/${hash}`);
        const json = await data.json();

        if (refImg.current) {
          refImg.current.src = `data:image/png;base64,${json["file-0"]}`;
        }
      };
      dataJson();
    }
  }, []);

  return (
    <div>
      <Layout>
        <img className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30" ref={refImg} src="" alt="" />
      <Link href={url} color="secondary">Home</Link>
      </Layout>
    </div>
  );
}
