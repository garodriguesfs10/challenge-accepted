import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Row, Col } from 'react-bootstrap'
import { format } from 'date-fns'
const LocaleScreen = ({ match }) => {


    const [loading, setLoading] = useState(true)
    const [response, setResponse] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false)
        const fetchWeather = async () => {
            const { data } = await axios.get(`/api/weather/${match.params.id}`)
            if (data) {
                setResponse(data)
                setLoading(false)
            } else {
                setError(true)
            }
        }

        fetchWeather()
    }, [match])

    const formatDate = (data) => {
        return format(new Date(data), 'dd/MM/yyyy')
    }

    return (
        <>
            {error ?
                <div>
                    <h4 className='mt-3'>Não foram encontrados resultados para essa busca <i className="far fa-sad-tear"></i></h4>
                </div>
                : !loading ?
                    <>
                        <h3 className="p-3 text-center">Previsões para a cidade de {response.locale.name} -  {response.locale.state}</h3>
                        <Card className="text-center" bg='Success'>
                            <Card.Header>Período de {formatDate(response.period.begin)} até {formatDate(response.period.end)}</Card.Header>
                            <Card.Body>
                                {response.weather.map(hoje => (
                                    <div key={hoje.date}>
                                        <Card.Title>{formatDate(hoje.date)}</Card.Title>
                                        <Card.Text>
                                            {hoje.text}
                                        </Card.Text>
                                        <Row>
                                            <Col>
                                                Temperatura Máxima: {hoje.temperature.max}°C <i className="fas fa-arrow-up"></i>
                                            </Col>
                                            <Col>
                                                Temperatura Mínima:{hoje.temperature.min}°C <i className="fas fa-arrow-down"></i>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Precipitação de Chuva: {hoje.rain.precipitation}mm <i className="fas fa-tint"></i>
                                            </Col>
                                            <Col>
                                                Probabilidade de Chuva: {hoje.rain.probability}% <i className="fas fa-cloud-rain"></i>
                                            </Col>
                                        </Row>
                                        <hr />
                                    </div>
                                ))}

                            </Card.Body>
                            <Card.Footer className="text-muted">Climatempo - 2020 - Gabriel Rodrigues </Card.Footer>
                        </Card>
                    </> : <div><h3>Carregando <i className="fas fa-spinner"></i></h3></div>
            }
        </>
    )
}

export default LocaleScreen
