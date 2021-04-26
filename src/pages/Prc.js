import React, { Component } from 'react';
import CardList from '../components/cardlist/CardList.jsx'

class Prc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gost: []
            
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({ gost:data}))
    }


    render() {
        return (
            <>
<CardList className="card-list">
            <div style={{ padding: 40 }} >
                {
                    this.state.gost.map(gost =>
                        <h1 key={gost.id}>{gost.name}</h1>
                    )
                }
            </div>
            </CardList>
            </>
        );
    }
}

export default Prc;