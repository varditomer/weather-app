
export default function SearchBar(
    {
        handleUserInput
    }: {
        handleUserInput: (userInput: string) => void;
    }
) {

    const handleInputSearch = (ev: any) => {
        const userInput: string = ev.target.value
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
        </div>
    )
}
