import React from 'react'
import {Card, Icon, Grid} from 'semantic-ui-react'
import pdf from '../file/Shane-Peterson-Resume.pdf'

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
                        <a href="mailto:shanespeterson36@gmail.com"><Icon name='mail' size='big'/><div>Email</div></a>
                    </Grid.Column><Grid.Column>
                        <a href="https://www.linkedin.com/in/shane-s-peterson/" target="blank"><Icon name='linkedin alternate' size='big'/><div>Linkedin</div></a>
                    </Grid.Column><Grid.Column>
                        <a href="https://github.com/lordsilverwing" target="blank"><Icon name= 'github square' size='big'/><div>Github</div></a>
                    </Grid.Column><Grid.Column>
                        <a href={pdf} target="blank"><Icon name='file' size='big'/><div>Resume</div></a>
                    </Grid.Column>
                    </Grid.Row>
                 </Grid>
            </Card.Content>
        </Card>
    )
}