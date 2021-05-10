import React from 'react'
import {Card, Image} from 'semantic-ui-react'


export default function RedPanda() {

    return(
        <Card>
            <Card.Header><h2>Red Pandas</h2></Card.Header>
            <Image src={process.env.PUBLIC_URL + '/images/redpanda.png'} />
            
        </Card>

    )
    
}