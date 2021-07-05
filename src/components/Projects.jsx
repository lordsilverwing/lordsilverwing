import React from 'react'
import {Card, Image} from 'semantic-ui-react'

export default function About() {

    return(
    <>
        <Card className="projects">
            <Card.Header><h2>PXI Delivery</h2></Card.Header>
            <div>MERNstack, React, Node, Mongodb, and Google Maps API</div>
            <Card.Content>
                <Image src={process.env.PUBLIC_URL + '/images/pxijobs.png'} />
            </Card.Content>
        </Card>
        <Card className="projects">
            <Card.Header><h2>Monster Finder</h2></Card.Header>
            <div>MERNstack, React, Express and D&D 5e Api</div>
            <Card.Content>
                <Image src={process.env.PUBLIC_URL + '/images/mainpage.png'} />
            </Card.Content>
            <a href='https://github.com/lordsilverwing/monsterfinder' target='blank'>Go to the Github Page</a>
        </Card>
        <Card className="projects">
            <Card.Header><h2>OurAlley</h2></Card.Header>
            <div>Python, Django and SQL</div>
            <Card.Content>
                <Image src={process.env.PUBLIC_URL + '/images/ouralleyhome.png'} />
            </Card.Content>
            <a href='https://github.com/lordsilverwing/OurAlley' target='blank'>Go to the Github Page</a>
         </Card>
         <Card className="projects">
            <Card.Header><h2>Prairie Rose Preserving</h2></Card.Header>
            <div>Node.js, Express, Mongoose and Mongodb</div>
            <Card.Content>
                <Image src={process.env.PUBLIC_URL + '/images/prairierosehome.png'} />
            </Card.Content>
            <a href='https://github.com/lordsilverwing/PrairieRosePreserving' target='blank'>Go to the Github Page</a>
         </Card>
         <Card className="projects">
            <Card.Header><h2>BlackJack Game</h2></Card.Header>
            <div>JavaScript, HTML5 and CSS</div>
            <Card.Content>
                <Image src={process.env.PUBLIC_URL + '/images/blackjackgame.png'} />
            </Card.Content>
            <a href='https://github.com/lordsilverwing/BlackJackgame' target='blank'>Go to the Github Page</a>
         </Card>

    </>
    )
}