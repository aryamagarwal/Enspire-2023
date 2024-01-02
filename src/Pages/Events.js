import React from 'react'
import './Events.css'
const details = [
    {
        name: 'Ad Arena',
        des: "Finding it difficult to exhibit your startups? Enspire of IIIT Lucknow brings a unique platform for celebrating entrepreneurship's history and spirit while inspiring today's and tomorrow's leaders and problem solvers. Startup Expo is a one-day startup showcase fest during Enspire of IIIT Lucknow.",
    },
    {
        name: 'Venturer',
        des: "If things are not failing you are not innovating enough”. Present strategies that could have prevented the failure of the startup/company.",
    },
    {
        name: 'Crypto',
        des: "Talent wins games, but teamwork and intelligence win championships.” But wait, there’s a twist. You don’t even know your team members until you finish your game. And that’s the mystery.",
    },

    {
        name: 'Gaming Nights',
        des: " Gather your squad, coordinate your strategies, and immerse yourself in thrilling esports experiences. Get ready for epic victories, clutch plays, and memorable gaming moments that will keep you coming back for more. Let the battle begin!",
    },
    {
        name: 'IPL Auction',
        des: "Always thought that you could create the best IPL team if only you had the money? Here is a chance to put yourself in the shoes of a bidder and build the team you always wanted to lift the coveted IPL trophy. This fun-filled event is a must for cricket lovers.",
    },
    {
        name: 'Monopoly',
        des: "Offline Monopoly is an interactive and life-sized version of the classic board game. Instead of moving pieces, participants become the tokens and physically move around a large game board. This adds a whole new level of engagement and excitement to the game.",
    },
    {
        name: 'Mystery Rooms',
        des: "May your minds be as sharp as you think they are.” Escape the mystery room. You may even find clues on a broom. The team that manages to get out first wins.",
    },
    {
        name: 'FIND-X',
        des: "Brainstorm with your mates and let your imagination run wild as Ecell presents 'FIND X' - an unconventional treasure hunt which would test your knowledge and wit.",
    },
    {
        name: 'Avenge the Fallen',
        des: "If things are not failing you are not innovating enough”. Present strategies that could have prevented the failure of the startup/company.",
    },
    {
        name: 'Million Dollar Idea',
        des: "With the Shark Tank fever gripping the country, MDI shares a similar theme. Set to be held in two rounds, it’s a mock Shark Tank where aspiring entrepreneurs from around the country pitch their business models to a panel of investors and persuade them to invest money in their idea and the best models would win a prize.",
    },
]
const styleHead = {
    textAlign: "left",
    color: "white",
    fontSize: "64px",
    fontFamily: "Space Grotesk,sans-serif",
}
const styleHead2 = {
    textAlign: "left",
    color: "#30aebc",
    fontSize: "64px",
    marginLeft: "10px",
    fontFamily: "Space Grotesk,sans-serif",
}

function Events() {

    setTimeout(() => {
        let x = document.querySelectorAll('.event');
        for (let i = 1; i < details.length; i += 2) {
            x[i].style.flexDirection = "row-reverse";

        }
    }, 1);


    return (
        <div>
            <span style={styleHead2}>E</span><span style={styleHead}>VENTS</span>
            {
                details.map((val) =>
                (
                    <>
                    <div className="event">
                        <div className="eventTitle">
                            <h1>{val.name}</h1>
                        </div>
                        <div className="eventDes">
                            <h4>{val.des}</h4>
                            <button className="eventBtn">Register Now!</button>
                        </div>
                       
                    </div>
                    <hr />
                    </>
                ))

            }

        </div>

    )
}

export default Events
