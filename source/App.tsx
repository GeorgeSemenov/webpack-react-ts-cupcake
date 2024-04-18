import * as React from "react";
import { useEffect } from "react";
import { fetchData } from "./api/fetchData";

export default function App() {
  const [componentData, setComponentData] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [err, setErr] = React.useState();
  useEffect(() => {
    fetchData().then((fetchResult) => {
      const { isLoading, result, error } = fetchResult;
      setIsLoading(isLoading);
      setComponentData(result);
      if (error) setErr(error);
    });
    return () => {
      setErr(undefined);
    };
  }, [componentData]);
  return (
    <>
      {isLoading ? (
        <p>Ожидайте завершения загрузки</p>
      ) : err ? (
        <p>В работе приложения произошла ошибка: {JSON.stringify(err)}</p>
      ) : (
        <div>{JSON.stringify(componentData)}</div>
      )}
    </>
  );
}
