import React from 'react'
import axios from 'axios'
import {usenavigate} from 'react-router-dom'


const CreatePost = () => {

const navigate = usenavigate()

const handleSubmit = (e)=>{
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post('http://localhost:3000/create-post', formData)
    .then((response) => {
   navigate('/feed')
    e.target.reset()
    })

    .catch((error) => {
    console.error('Error creating post:', error)
    alert('Failed to create post. Please try again.')
    })

}

    return (
        <div className='page-background'>
            <section className='create-post-wrapper'>
                <div className='create-post-card'>
                    <div className='create-post-header'>
                        <h1>Create Post</h1>
                        <p>Upload an image and add a caption to share your post.</p>
                    </div>

                    <form className='create-post-form' onSubmit={handleSubmit} encType='multipart/form-data'>
                        <label className='form-field'>
                            <span>Upload Image</span>
                            <input type='file' name='image' accept='image/*' />
                        </label>

                        <label className='form-field'>
                            <span>Caption</span>
                            <input type='text' name='caption' placeholder='Enter post caption' />
                        </label>

                        <button type='submit' className='submit-button'>Create Post</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default CreatePost
