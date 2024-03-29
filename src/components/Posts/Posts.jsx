import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import postService from '../../services/posts'; // {get: getPosts, create: createPost}
import styles from './posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState('')
    const [showAll, setShowAll] = useState(false)
    const [wrapper, setWrapper] = useState("wrapper-grid")

    useEffect(() => {
        postService
        .get()
        .then(res => {
          setPosts(res.data)
        }) 
      }, [])

    const addPost = (event) => {
        event.preventDefault()
        const postObject = {
            title: newPost,
            published: Math.random() > 0.5
        }
        postService
            .create(postObject)
            .then(res => setPosts(posts.concat(res.data)))   // [{}, {}, {}].concat({}) -> 
        setNewPost('')
    }

    const togglePublished = (id, published) => {
        const editedInfo = {
            "published" : !published 
        }
        postService
            .edit(id, editedInfo)
            .then(res => {
                setPosts(posts.map(post => post.id === id ? res.data : post)) // [...posts, ]
            })
            .catch(err => console.log(err))
            // уведомление о том, что прошло успешно
    }

    const deletePost = () => {
        // написать алгоритм удаления с сервера и перерисовки после успешного удаления
        console.log('удалить')
    }

    const postsToShow = showAll ? posts : posts.filter(post => post.published) 

    return (
        <div>
            <div>
                <button onClick={() => setWrapper("wrapper-list")}>
                    Список
                </button>
                <button onClick={() => setWrapper("wrapper-grid")}>
                    Сетка
                </button>
                <button onClick={() => setShowAll(!showAll)}> 
                    Показать {showAll ? 'опубликованные' : 'все'}
                </button>
            </div>
            <div className={styles[wrapper]}> {/* wrapper = "wrapper-grid" */}
                {postsToShow.map(post => {
                    return ( 
                        <Post 
                            key={post.id} 
                            post={post}
                            togglePublished={togglePublished}
                            deletePost={deletePost}
                        />
                    )
                } ) }
            </div>
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
    Создать кнопку "Сетка 3"
    При нажатии на кнопку отображать по 3 элемента в одной строке
*/

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



            const addPost = () => {
                const num = 10
                console.log(num)
            }
            console.log(num) // num is not defined
*/