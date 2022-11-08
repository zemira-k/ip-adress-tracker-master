const APIKEY = "at_b4sL79hBEbOZBQeY7YuDvZiDBgmMJ";

const costumFetch = (url) =>
  fetch(url).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText),
  );
const url = `https://geo.ipify.org/api/v2`;

export const getApiInfo = (ip) => {
  return costumFetch(
    `${url}/country,city?apiKey=${APIKEY}&ipAddress=${ip}`,
    {},
  );
};
