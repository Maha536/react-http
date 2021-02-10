import React, { Component } from 'react'
import axios from 'axios'

class PutForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
             userId : '',
             id : '',
             title : '',
             body : ''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(responce => {
            console.log(responce)
            this.setState({
                userId : responce.data.userId,
                id : responce.data.id,
                title : responce.data.title,
                body : responce.data.body
            })
        })
        .catch(
            error => {console.log(error)
            this.setState({
                errorMsg: 'Error in retrieving data'
            })
        }
        )
    }
    
    changeHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.put('https://jsonplaceholder.typicode.com/posts/'+this.state.id,this.state)
            .then(responce => console.log(responce))
            .catch(error => console.log(error))
    }
    
    render() {
        const {userId, id, title, body} = this.state
        console.log('from render() : '+this.state.userId)
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='userId' value={this.state.userId} placeholder='userId' onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type='text' name='title' value={title} placeholder='title' onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type='text' name='body' value={body} placeholder='body' onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default PutForm
