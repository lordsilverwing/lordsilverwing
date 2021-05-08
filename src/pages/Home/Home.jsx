import React from 'react'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import {Grid} from 'semantic-ui-react'

export default function Home(){
    return(
        <>
            <Grid columns={2}>
                <Grid.Column >
                    <About />
                    <Contact />
                    <Skills />
                </Grid.Column>
                <Grid.Column>
                    <h1 className="project">Projects</h1>
                    <Projects />
                </Grid.Column>
            </Grid>
        </>
    )
}