import { useRef } from 'react';
import MagnifyIcon from '../assets/icons/magnifyingglass.svg'

export default function SearchBar(
    {
        handleUserInput
    }: {
        handleUserInput: (userInput: string) => void;
    }
) {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputSearch = (ev: any) => {
        const userInput: string = ev.target.value
        if (!userInput) return
        handleUserInput(userInput)
    }

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="input-search"
                onChange={handleInputSearch}
                placeholder="Search for a city or airport (3 digit code)"
                ref={inputRef}
            />
            <img
                src={MagnifyIcon}
                alt="search icon"
                className="search-icon"
                onClick={handleIconClick}
            />
        </div>
    )
}
