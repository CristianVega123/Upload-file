import Layout from "../Layout/Layout";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { url_dev_backend, url } from "../url";
import {Link} from '@nextui-org/react'

function DataProduct() {
  const { hash } = useParams();

  const refImg = useRef() as React.RefObject<HTMLImageElement>;
  useEffect(() => {
    if (hash) {
      const dataJson = async () => {
        const data = await fetch(`${url_dev_backend}/api/data/${hash}`);
        const json = await data.json();

        if (refImg.current) {
          refImg.current.src = json.url
          
        }
      };
      dataJson();
    }
  }, []);

  console.log(hash);
  return (
    <Layout>
      <img ref={refImg} alt=""/>
      <Link href={url} color="secondary">Home</Link>
    </Layout>
  );
}

export default DataProduct;
