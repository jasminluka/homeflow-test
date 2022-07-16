import SearchBox from './SearchBox'

const Header = () => {
  return (
    <header className="flex flex-col justify-between md:flex-row">
      <h1 className="text-8xl">Posh Properties</h1>

      <SearchBox />
    </header>
  )
}

export default Header
