import React from 'react'
import {Card} from 'semantic-ui-react'

export default function About() {

    return(
        <Card className="about">
            <Card.Header><h1>Shane Peterson</h1></Card.Header>
            <Card.Content>
                <h3>Full-Stack Web Developer</h3>
                <h4>Denver, Colorado</h4>
                <div>Dependable and resourceful Full-Stack Webdeveloper who enjoys bringing creative ideas and solutions to the table. As my prior experience in retail shows that I know how to work with in a team of peers to achieve great things. It also fortified my ability to excel under pressure and to continue refining my own skills and knowledge. </div>
            </Card.Content>
        </Card>
    )
}