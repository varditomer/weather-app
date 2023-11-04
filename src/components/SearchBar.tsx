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
    const [showHint, setShowHint] = useState(false);


    const handleInputSearch = (ev: any) => {
        const userInput: string = ev.target.value
        if (!userInput) {
            setIsClearIconHidden(true)
            setShowHint(false);
            return
        }
        setIsClearIconHidden(false)
        userInput.length < 3 ? setShowHint(true) : setShowHint(false);
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
        setShowHint(false)
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
            {showHint && <div className="hint">Input should be at least 3 characters</div>}

        </div>
    )
}
