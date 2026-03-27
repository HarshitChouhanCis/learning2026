
import React,{useEffect,useState} from "react"

function useFetch(url) {
  const [data, setData] = useState(null); // ✅ FIXED

  useEffect(() => {
    if (!url) return; // ✅ safety check

    fetch(url)
      .then(res=> res.json())
      .then(data => setData(data))
      .catch(err=> console.error(err)); // ✅ optional error handling
  }, [url]);

  return [data];
}

export default useFetch;