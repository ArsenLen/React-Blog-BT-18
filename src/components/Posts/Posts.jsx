import React from 'react';

const Posts = (props) => {
    const { posts } = props // [{}, {}, {}]
    return (
        <div>
            {/* <div>
                <p>{props.posts[0].title}</p>
                <p> { props.posts[0].published ? 'Опубликовано' : 'Не опубликовано' } </p>
            </div>
            <p>{props.posts[1].title}</p>
            <p>{props.posts[2].title}</p> */}
            {posts.map(post => {
                return ( 
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.published ? 'Опубликовано' : 'Не опубликовано'}</p>
                </div>
                )
            } ) }
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
*/