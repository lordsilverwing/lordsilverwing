import React from 'react'
import {Card, Icon, Grid} from 'semantic-ui-react'
import pdf from '../file/resume-shane-peterson.pdf'

export default function About() {
    return(
        <Card className="contact">
            <Card.Header><h2>Contact</h2></Card.Header>
            <Card.Content>
                
                <div><strong>Phone:</strong>(720)-926-0145</div>
                <br></br>
                <Grid columns={4}>
                    <Grid.Row>
                    <Grid.Column>
                        <a href="mailto:shanespeterson36@gmail.com"><Icon name='mail' size='big'/></a><div>Email</div>
                    </Grid.Column><Grid.Column>
                        <a href="https://www.linkedin.com/in/shane-s-peterson/" target="blank"><Icon name='linkedin alternate' size='big'/></a><div>Linkedin</div>
                    </Grid.Column><Grid.Column>
                        <a href="https://github.com/lordsilverwing" target="blank"><Icon name= 'github square' size='big'/></a><div>Github</div>
                    </Grid.Column><Grid.Column>
                        <a href={pdf} target="blank"><Icon name='file' size='big'/></a><div>Resume</div>
                    </Grid.Column>
                    </Grid.Row>
                 </Grid>
            </Card.Content>
        </Card>
    )
}