import React from 'react'
import {Card} from 'semantic-ui-react'

export default function About() {

    return(
        <Card className="about">
            <Card.Header><h2>Skills</h2></Card.Header>
            <Card.Content>
                <div>HTML | JavaScript | CSS | SQL | Github | Python | Django | Node | Express | AWS | Mongodb | React</div>
            </Card.Content>
        </Card>
    )
}