import { useState } from 'react'

import { Header } from './components/Header/Header.js'
import { LeftSide } from './components/LeftSide/LeftSide.js'
import { RightSide } from './components/RightSide/RightSide.js'

import styles from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.content}>
        <LeftSide />
        <RightSide />
      </div>

    </div>
  )
}

export default App
