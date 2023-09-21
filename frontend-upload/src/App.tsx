import Layout from "./Layout/Layout";
import DragAreaService from './components/DragArea'
// import DragAreaLocal from './components/DragAreaLocal'



export default function App() {

  return (
    <Layout>
      {/* < DragAreaLocal /> */}
      <DragAreaService />
    </Layout>
  );
}
