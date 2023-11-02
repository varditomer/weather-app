
import arrowBack from '../assets/icons/arrow_back.svg'
import options from '../assets/icons/options.svg'
export default function Header() {
    return (
        <header className="header">
            <div className="left">
                <img src={arrowBack} alt="arrow back" />
                <h1 className="app-title">Weather</h1>
            </div>
            <img src={options} alt="more options" />
        </header>
    )
}
