import { URLsArr } from "../constants";
import { fetchResultType } from "./types";

export async function fetchData(): Promise<fetchResultType> {
  const fetchResult: fetchResultType = { isLoading: true };
  try {
    const responses = await Promise.allSettled(
      URLsArr.map((url) => fetch(url))
    );
    const resultPromises = responses.map((response, index) => {
      if (response.status === "fulfilled") {
        return response.value.json();
      } else {
        console.error(
          `error occured while fetching data from ${URLsArr[index]}`
        );
        fetchResult.error = "Fetching data error";
        return undefined;
      }
    });
    fetchResult.result = await Promise.all(resultPromises);
  } catch (e) {
    console.error(e);
    fetchResult.error = e;
  } finally {
    fetchResult.isLoading = false;
  }

  return fetchResult;
}
