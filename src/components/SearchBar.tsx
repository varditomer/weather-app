export default function SearchBar() {
    const handleInputSearch = (ev: any) => {
        console.log(`ev.target.value:`, ev.target.value)
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
