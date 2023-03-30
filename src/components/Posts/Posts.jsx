import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import axios from 'axios';

const getPosts = () => {
    return axios.get('http://localhost:3001/posts')
    // return fetch('http://localhost:3001/posts').then(res => res.json())
}

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState('')
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        getPosts()
        .then(res => {
          setPosts(res.data)
        }) 
      }, [])

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

    const postsToShow = showAll ? posts : posts.filter(post => post.published) 

    return (
        <div>
            <div>
                <button onClick={() => setShowAll(!showAll)}> 
                    Показать {showAll ? 'опубликованные' : 'все'}
                </button>
            </div>
            {postsToShow.map(post => {
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

// По нажатию на кнопку отображать либо все посты, либо только опубликованные
// текст в кнопке меняется в зависимости от отображаемых постов

// if(num !== 20)  !true = false  !false = true

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