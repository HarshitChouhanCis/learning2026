import React, { useState, useMemo, useCallback, useRef, useEffect } from "react"

const Button = React.memo(({ onClick, data }) => {
  console.log("button is rendering", data)
  return <button onClick={onClick}>{data}</button>
})

export default function Memoization() {
  const refCount = useRef(0)
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    refCount.current += 1;
    console.log("refCount", refCount);
  })

  function Test(n) {
    console.log("console.log is printing");
    return n * 2;
  }
  

  const a = useMemo(() => Test(sum), [sum])

  const handleCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const handleSum = useCallback(() => {
    setSum(sum + 1)
  }, [sum])

  return (<>
    <p>{a}</p>
    <p>{count}</p>
    <Button onClick={handleCount} data={"inc count"}>increase count</Button>
    <Button onClick={handleSum} data={"inc sum"}>increase sum</Button>
  </>)

}