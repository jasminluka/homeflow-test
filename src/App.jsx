import SearchProvider from 'contexts/Search'
import Header from 'components/Header'
import Properties from 'components/Properties'

const App = () => {
  return (
    <SearchProvider>
      <div className="container mx-auto my-5">
        <Header />
        <Properties />
      </div>
    </SearchProvider>
  )
}

export default App
