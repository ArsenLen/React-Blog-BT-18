import React, { useState } from 'react';
import Post from '../Post/Post';

const Posts = (props) => {
    const [posts, setPosts] = useState(props.posts)
    const [newPost, setNewPost] = useState('')

    const addPost = (event) => {
        event.preventDefault()
        const postObject = {
            id: posts.length + 1,
            title: newPost,
            published: Math.random() > 0.5
        }    
        setPosts(posts.concat(postObject)) // [{}, {}, {}].concat({}) -> 
        setNewPost('')
    }

    return (
        <div>
            {posts.map(post => {
                return ( 
                    <Post key={post.id} post={post} />
                )
            } ) }
            <form onSubmit={addPost}>
                <input 
                    type="text" 
                    value={newPost}
                    onChange={event => setNewPost(event.target.value)}
                />
                <input type="submit" value="Создать пост" />
            </form>
        </div>
    );
};

export default Posts;

/*
    props = {
        posts: [
            {
                title: "My first title"
            },
             {},
            {}]
    }
    posts = ['', '', '']
    props.posts[0].title

    const obj = {
        name: "Arsen",
        age: 25
    }
    obj.name, obj.age
    const {name, age} = obj
    name, age


    props.posts[0].published ? 'Опубликовано' : 'Не опубликовано' 

    if(props.posts[0].published) {
        'Опубликовано'
    } else {
        'Не опубликовано'
    }
    const listItems = people.map(person => <li> {person} </li>)
    [<li>"Name Surname"<li>, <li>"Name Surname"</li>]


    1.
        const button = document.querySelector('.btn')

        button.addEventListener('click', function() {})
        button.addEventListener('click', (event) => setNewPost(event))

    2. function handleClick() {}
        button.addEventListener('click', handleClick)


        Math.random() - [0, 1).  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9 
            Math.random() > 0.5
            0.1 > 0.5 - false
            0.4 > 0.5 - false
            0.5 > 0.5 - false
            0.7 > 0.5 - true
*/