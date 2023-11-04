import { useRef, useState } from 'react';
import MagnifyIcon from '../assets/icons/magnifyingglass.svg'
import ClearIcon from '../assets/icons/clear.svg'

export default function SearchBar(
    {
        handleUserInput
    }: {
        handleUserInput: (userInput: string) => void;
    }
) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [isClearIconHidden, setIsClearIconHidden] = useState(true);

    const handleInputSearch = (ev: any) => {
        const userInput: string = ev.target.value
        if (!userInput) {
            setIsClearIconHidden(true)
            return
        }
        setIsClearIconHidden(false)
        handleUserInput(userInput)
    }

    const handleSearchIconClick = () => {
        inputRef?.current?.focus();
    };

    const handleClearSearch = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
            handleUserInput('');
        }
        setIsClearIconHidden(true)
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
                onClick={handleSearchIconClick}
            />
            {!isClearIconHidden && <img
                src={ClearIcon}
                alt="clear icon"
                className="clear-icon"
                onClick={handleClearSearch}
            />
            }
        </div>
    )
}
