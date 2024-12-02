import Globe from "/assets/img/Globe.svg"

export default function Header () {
    return (
        <>
            <div className="header-container">
                <img src={Globe} alt="Globe" />
                <p className="header-title">my travel journal.</p>
            </div>
        </>
    )
}