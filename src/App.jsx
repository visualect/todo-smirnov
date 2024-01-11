import Layout from './components/Layout'
import TodoFilter from './components/TodoFilter'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import GlobalProvider from './providers/GlobalProvider'

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </Layout>
    </GlobalProvider>
  )
}

export default App
