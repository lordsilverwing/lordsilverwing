import React from 'react'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import RedPanda from '../../components/RedPanda'
import {Grid} from 'semantic-ui-react'

export default function Home(){
    return(
        <>
            <Grid stackable columns={2}>
                <Grid.Row>
                <Grid.Column >
                    <h1 className="project">Shane Peterson</h1>
                    <About />
                    <Contact />
                    <Skills />
                    <RedPanda />
                </Grid.Column>
                <Grid.Column>
                    <h1 className="project">Project Portfolio</h1>
                    <Projects />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}