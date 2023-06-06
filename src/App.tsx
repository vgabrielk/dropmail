
import { useEffect, useState } from 'react'

import RandomEmail from './share/RandomEmailScreen';
import Inbox from './share/Inbox';

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
      <Inbox time={time} />
    </>
  )
}

export default App
