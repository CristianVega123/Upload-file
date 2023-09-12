import Layout from "./Layout/Layout";
import DragAreaService from './components/DragArea'
import DragAreaLocal from './components/DragAreaLocal'



export default function App() {

  // useEffect(() => {
  //   const data = async () => {
  //     const dataFetch = await fetch(`${url_dev_backend}/api/all`);
  //     const json = await dataFetch.json();

  //     if (json) {
  //       setDataAll(json);
  //     }
  //   };
  //   data();
  //   return () => {};
  // }, []);


  return (
    <Layout>
      {/* < DragAreaLocal /> */}
      <DragAreaService />
    </Layout>
  );
}
