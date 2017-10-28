import React, {Component} from 'react';
import axios from 'axios';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {person: [], value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.UserList();
    }

    UserList() {
        axios.get('https://api.github.com/users')
            .then(res => {
                this.setState({person: res.data})
            });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const persons = this.state.person.map((item) => (
            <div>
                <br/>
                <br/>
            <div style={{marginLeft: '40%', marginRight:'40%', border:'2px solid lightgrey', borderRadius:'10px'}}>
                <br/>
                <img style={{width: '65px', borderRadius:'32px'}} src={item.avatar_url} /> <span style={{color:'lightgrey'}}><h1>{item.login}</h1></span>
            </div>
            </div>
        ));

        return (
            <div>
                <h1>Github Users</h1>
                <br/>
                <br/>
                <input style={{width: '200px', paddingLeft:'10px', height:'50px'}} placeholder="Search here..." type="text" value={this.state.value} onChange={this.handleChange}/>
                <br/>
                <div style={{height: '700px', overflow: 'auto'}} id="layout-content" className="layout-content-wrapper">
                    <div className="panel-list">{persons}</div>
                </div>
            </div>
        );
    }
}