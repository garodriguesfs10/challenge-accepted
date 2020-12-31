import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import Header from '../components/Header'
import LocaleScreen from '../components/LocaleScreen'

describe('Testes Render', () => {
    it('render App component', async () => {
        shallow(<App />)
    })

    it('render Header component', async () => {
        shallow(<Header />)
    })

    it('render LocaleScreen component', async () => {
        shallow(<LocaleScreen />)
    })


})
