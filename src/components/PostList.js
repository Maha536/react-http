import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
constructor(props) {
    super(props)

    this.state = {
         posts : [],
         errorMsg : ''
    }
}

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/postsh')
    .then(responce => {
        console.log(responce)
        this.setState({
            posts : responce.data
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


    render() {
        const {posts, errorMsg} = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
                {/*
                <table style={{border:1}}>
                    <thead>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </thead>
                    {
                        posts.length?
                        posts.map(post =>{<tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>}) : null
                    }
                </table>
                */}
            </div>
        )
    }
}

export default PostList
