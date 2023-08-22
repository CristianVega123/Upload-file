import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { url_dev_backend } from "../../url";

const columns = [
  {
    id: 0,
    label: "ID de la imagen",
  },
  {
    id: 1,
    label: "Nombre Orignal",
  },
  {
    id: 2,
    label: "Nombre Guardado",
  },
  {
    id: 3,
    label: "URL del recurso",
  },
];

function AccodionData() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  const list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setIsLoading(false);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(
        cursor || `${url_dev_backend}/api/all`,
        { signal }
      );
      let json = await res.json();

      setHasMore(json.next !== null);

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  return (
    <Accordion
      itemClasses={{
        title: "text-white",
      }}
    >
      <AccordionItem
        className="text-[#96A5C7]"
        key={1}
        aria-label="datos"
        title="Url de las imagenes"
      >
        {/* <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.id}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={dataAll?.data}>
            {(item) => (
              <TableRow key={item.id_storage}>
                {(columnkey) => {
                  let keyInterfaceData: { [key: string]: any };
                  if (dataAll) {
                    keyInterfaceData = Object.keys(dataAll.data[0]);

                    if (columnkey == 3) {
                      console.log(item);
                      return (
                        <TableCell>
                          {`${url}/api/data/` + item.id_storage}
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell>
                        {getKeyValue(item, keyInterfaceData[columnkey])}
                      </TableCell>
                    );
                  }
                  return <TableCell>{[]}</TableCell>;
                }}
              </TableRow>
            )}
          </TableBody>
        </Table> */}
      </AccordionItem>
    </Accordion>
  );
}

export default AccodionData;
