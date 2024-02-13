
function updateOptions(options) {
    const update = { ...options };
    if (localStorage.loginToken) {
      update.headers = {
        ...update.headers,
        Authorization: `Bearer ${localStorage.loginToken}`,
      };
    }
    return update;
  }
  
  export default function fetcher(url, options) {
    return fetch(url, updateOptions(options));
  }