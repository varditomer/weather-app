import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const handleUserInput = async (userInput: string) => {
    console.log(`userInput:`, userInput)

  }

  return (
    <div className="Home">
      <Header />
      <SearchBar handleUserInput={handleUserInput} />

    </div>
  )
}
