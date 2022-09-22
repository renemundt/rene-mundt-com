import React, { useEffect } from 'react'

const cv = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://www.test.dfds.com/en-gb/passenger-ferries/booking'
    }, 2000)
  }, [])

  return <div>DFDS redirect</div>
}

export default cv
