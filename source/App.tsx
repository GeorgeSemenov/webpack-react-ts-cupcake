import * as React from "react";
import { useEffect } from "react";
import { fetchData } from "./api/fetchData";
import { ratesType } from "./api/types";
import RatesTable from "./components/RatesTable";
import { URLsArr, URLsArrLongPoll } from "./constants";

export default function App() {
  const [rates, setRates] = React.useState<(ratesType | undefined)[]>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFirstLoad, setIsFirstLoad] = React.useState(true);
  const [err, setErr] = React.useState();
  useEffect(() => {
    const urls = isFirstLoad ? URLsArr : URLsArrLongPoll;
    fetchData(urls).then((fetchResult) => {
      const { isLoading, result, error } = fetchResult;
      setIsLoading(isLoading);
      const onlyRates = result.reduce((cur, next) => {
        next.rates ? cur.push(next.rates) : cur.push(undefined);
        return cur;
      }, []);
      setRates(onlyRates);
      if (error) setErr(error);
    });
    return () => {
      setErr(undefined);
    };
  }, [rates]);
  useEffect(() => {
    setIsFirstLoad(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Ожидайте завершения загрузки</p>
      ) : err ? (
        <p>В работе приложения произошла ошибка: {JSON.stringify(err)}</p>
      ) : (
        <RatesTable rates={rates} />
      )}
    </>
  );
}
