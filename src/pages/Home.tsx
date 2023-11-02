import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { locationService } from "../services/locations.service";

export default function Home() {
  const handleUserInput = async (userInput: string) => {
    const locations = locationService.getLocations(userInput)

  }

  return (
    <div className="Home">
      <Header />
      <SearchBar handleUserInput={handleUserInput} />

    </div>
  )
}
