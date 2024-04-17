import * as React from "react";
import { useEffect } from "react";
import { URLs } from "./constants.ts";
interface IFetchedData {
  rates?: { RUB: string; EUR: string; USD: string };
}
export default function App() {
  const [componentData, setComponentData] = React.useState<IFetchedData>({});
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    fetch(URLs.first)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Can't fetch data.`);
      })
      .then((fetchedData: IFetchedData) => {
        console.log(fetchedData);
        setComponentData(fetchedData);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <p>Приложение работает, что странно ...</p>
      {isLoading ? (
        <p>Ожидайте завершения загрузки</p>
      ) : (
        <div>{componentData.rates.EUR}</div>
      )}
    </>
  );
}
