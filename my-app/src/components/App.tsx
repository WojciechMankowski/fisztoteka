import React from 'react';
import {dowlandNameSet } from '../Helpers/DoawloandNameSet'
import {AddNewCard} from './AddNewFisccard'

type TypProps = {};
type TypeState = {
    NameSet: string[]
}

class App extends React.Component<TypProps, TypeState> {
    constructor(props: TypProps){
        super(props)
        this.state = {
            NameSet: []
        }
    }
    componentDidMount(){
        const nameset = dowlandNameSet()
        this.setState({NameSet: nameset})
    } 
    render(){
        return(
            <div>
                <h2>Moja APLIKACJA</h2>
                <AddNewCard />
            </div>
        )
    }
}

export default App



// kompoment logowania
// kompoment rejestracji