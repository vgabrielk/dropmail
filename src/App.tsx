
import { useEffect, useState } from 'react'
import './App.css'
import Inbox from './Share/Inbox'
import RandomEmail from './Share/RandomEmailScreen'


function App() {
  const [time, setTime] = useState<number>(15);

  function countDown(count: number = time) {
    if (count === 0) {
      setTime(15);
      count = 15;
    };
    setTimeout(() => {
      setTime(count - 1);
      return countDown(count - 1);
    }, 1000)

  }

  useEffect(() => {
    countDown();
  }, [])

  return (
    <>
      <RandomEmail time={time} />
      <Inbox />
    </>
  )
}

export default App
