import React from 'react';
import ReactDOM from 'react-dom/client';
import {AddNewCard} from './AddNewFisccard'
import {dowlandNameSet } from '../Helpers/DoawloandNameSet'
import {creatOptions} from "../Helpers/creatOptions"
class App extends React.Component{
    constructor(props: any){
        super(props)
        this.state = {
            NameSet: []
        }
    }
    componentDidMount(){
        const nameset = dowlandNameSet()
        this.setState({NameSet: nameset})
        const select_add: HTMLSelectElement  = document.querySelector('#select_add')!
        // console.log(select_add);
        creatOptions(nameset, select_add)

    } 
    render(){
        return(
            <div>
                <h2>Moja APLIKACJA</h2>
                <AddNewCard/>
            </div>
        )
    }
}

export default App



// kompoment logowania
// kompoment rejestracji