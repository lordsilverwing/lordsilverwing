import React from 'react'
import {Card, Grid, Icon} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function About() {

    return(
        <Card className="about">
            <Card.Header><h2>Skills</h2></Card.Header>
            <Card.Content>
                <Grid columns={5} divided>
                    <Grid.Row>
                    <Grid.Column>
                        <Icon name="html5" size="big"/><div>HTML5</div><br/><Icon name="aws" size="big"/><div>AWS</div>
                    </Grid.Column><Grid.Column>
                        <FontAwesomeIcon icon={["fab", "js-square"]} size="2x"/><div>JavaScript</div><br/><Icon name="react" size="big"/><div>React</div>
                    </Grid.Column><Grid.Column>
                        <Icon name="css3 alternate"  size="big"/><div>CSS3</div><br/><Icon name="node js" size="big"/><div>Node</div>
                    </Grid.Column><Grid.Column>
                        <Icon name="github square" size="big"/><div>GitHub</div><br/><Icon name="database" size="big"/><div>Mongodb</div>
                    </Grid.Column><Grid.Column>
                        <Icon name="python" size="big"/><div>Python</div><br/><Icon name="server" size="big"/><div>Django</div>
                    </Grid.Column><Grid.Column>
                        
                    </Grid.Column>  
                    </Grid.Row>
                </Grid> 
            </Card.Content>
        </Card>
    )
}