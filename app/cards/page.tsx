export default function Cards(){
    return <div className="main-cards">
        <div className="search">
            <p className="marvel">Marvel characters</p>
            <input type="text" placeholder="Find"/>
        </div>
        <div className="catalog">
            <div className="card">
                <img src="/marvel.png" width={156} height={140} alt="" />
                <p className="hero-name">3-D Man</p>
            </div>
            <div className="card">
                <img src="/marvel.png" width={156} height={140} alt="" />
                <p className="hero-name">3-D Man</p>
            </div>
            <div className="card">
                <img src="/marvel.png" width={156} height={140} alt="" />
                <p className="hero-name">3-D Man</p>
            </div>
            <div className="card">
                <img src="/marvel.png" width={156} height={140} alt="" />
                <p className="hero-name">3-D Man</p>
            </div>
            <div className="card">
                <img src="/marvel.png" width={156} height={140} alt="" />
                <p className="hero-name">3-D Man</p>
            </div>
            <div className="card">
                <img src="/marvel.png" width={156} height={140} alt="" />
                <p className="hero-name">3-D Man</p>
            </div>
        </div>
    </div>
}