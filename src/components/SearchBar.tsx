import MagnifayIcon from '../assets/icons/magnifyingglass.svg'

export default function SearchBar(
    {
        handleUserInput
    }: {
        handleUserInput: (userInput: string) => void;
    }
) {

    const handleInputSearch = (ev: any) => {
        const userInput: string = ev.target.value
        if (!userInput) return
        handleUserInput(userInput)

    }

    return (
        <div className="search-bar">
            <input
                type="text"
                className="input-search"
                onChange={handleInputSearch}
                placeholder="Search for a city or airport"
            />
            <img src={MagnifayIcon} alt="search icon" className="search-icon" />
        </div>
    )
}
