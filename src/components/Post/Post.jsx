import React from 'react';
import styles from './post.module.css';

const Post = (props) => {
    // { post: {id, title, published} }  const {post} = props
    return (
        <div className={styles.post}>
            <p className={styles.title}>{props.post.title}</p>
            <p className={styles.published}>{props.post.published ? 'Опубликовано' : 'Не опубликовано'}</p>
        </div>
    );
};

export default Post;
/*
    Стилизовать приложение с помощью модульных стилей

    const props = {
        post: {
            title
        }
    }
    props.post.title

    const {post} = props
    const post = {
        title: 
    }
*/