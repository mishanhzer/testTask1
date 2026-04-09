import { LeftSide } from './components/LeftSide/LeftSide'
import { RightSide } from './components/RightSide/RightSide'
import { useAddTask } from './store/store.js'

export const App = () => {
  const addTask = useAddTask()

  return (
    <div style={{ display: 'flex' }}>
      <LeftSide onAddTask={addTask} />
      <RightSide />
    </div>
  )
}