export const urlBase = "http://localhost:3000";
export const URLs = {
  first: new URL("/api/v1/first/poll", urlBase),
  second: new URL("/api/v1/second/poll", urlBase),
  third: new URL("/api/v1/third/poll", urlBase),
};
export const URLsArr = [URLs.first, URLs.second, URLs.third];
