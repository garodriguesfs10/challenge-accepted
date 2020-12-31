import React, { useState, useEffect } from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'

const Header = () => {

    const [locales, setLocales] = useState([])
    const [error, setError] = useState(false)


    useEffect(() => {
        try {
            const fetchLocales = async () => {
                const { data } = await axios.get('/api/locales')
                if (data) {
                    console.log(data)
                    setLocales(data)
                }

            }

            fetchLocales()
        } catch (error) {
            console.log('Error fetch: ' + error)
            setError(true)
        }

    }, [])


    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="md">
                <Container>
                    <LinkContainer to={`/`}>
                        <Navbar.Brand>ClimaTempo</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {error ? <p>Erro ao buscar cidades</p> :
                            <div>
                                {
                                    locales.map(local => (

                                        <LinkContainer to={`/locale/${local.id}`} key={local.id}>
                                            <Button className="ml-3" data-testid='botaoCidadeCarregada'>
                                                {local.name} - {local.state}
                                            </Button>
                                        </LinkContainer>

                                    ))
                                }
                            </div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )

}

export default Header
