import Link from "next/link";

const Header = () => {
    return(
        <header className="container head_cont">
            <div className="links">
                <Link href="/" id="home">Home</Link>
                <Link href="/cards">Cards</Link>
            </div>
            <div className="head">
                <b>Marvel Heroes</b>
            </div>
        </header>
    )
}

export {Header};