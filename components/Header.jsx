import Globe from "/assets/img/Globe.svg"

export default function Header () {
    return (
        <header>
            <img src={Globe} alt="Globe" />
            <p className="header-title">my travel journal.</p>
        </header>
    )
}