import FirstCouple from "./photo/Couple1.png";
import SecondCouple from "./photo/Couple2.jpg";
import ThirdCouple from "./photo/Couple3.jpg";
import FourthCouple from "./photo/Couple4.jpg";
import FifthCouple from "./photo/Couple5.png";
import SixthCouple from "./photo/Couple6.png";
import "bulma/css/bulma.css";
function App() {
    return (
        <>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Couples Meet</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <Card
                                title="Mars Bondo"
                                handle="@Bondoo1"
                                image={FirstCouple}
                                description="As he read, I fell in love the way you fall asleep: slowly, and then all at once.” – John Green"
                            />
                        </div>
                        <div className="column is-4">
                            <Card
                                title="James Iris"
                                handle="@Iris101"
                                image={SecondCouple}
                                description="I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.– Angelita Lime."
                            />
                        </div>
                        <div className="column is-4">
                            <Card
                                title="Roy Miller"
                                handle="@Royko240"
                                image={ThirdCouple}
                                description="The real lover is a man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space. – Marilyn Monroe"
                            />
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <Card
                                title="James Bond"
                                handle="@Bondoo1"
                                image={FourthCouple}
                                description="I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow. – Leo Christopher"
                            />
                        </div>
                        <div className="column is-4">
                            <Card
                                title="Philip Selma"
                                handle="@Philo213"
                                image={FifthCouple}
                                description="I’ll be loving you, always with a
                                love that’s true – Patsy Cline"
                            />
                        </div>
                        <div className="column is-4">
                            <Card
                                title="Ray Bature"
                                handle="@Bator818"
                                image={SixthCouple}
                                description="Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive. – Unknown"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

function Card({ title, handle, image, description }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="couples" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="subtitle is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    );
}

export default App;
