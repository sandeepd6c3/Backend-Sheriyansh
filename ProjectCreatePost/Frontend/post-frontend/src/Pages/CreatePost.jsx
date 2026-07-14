import React from 'react'

const CreatePost = () => {
    return (
        <div className='page-background'>
            <section className='create-post-wrapper'>
                <div className='create-post-card'>
                    <div className='create-post-header'>
                        <h1>Create Post</h1>
                        <p>Upload an image and add a caption to share your post.</p>
                    </div>

                    <form className='create-post-form'>
                        <label className='form-field'>
                            <span>Upload Image</span>
                            <input type='file' />
                        </label>

                        <label className='form-field'>
                            <span>Caption</span>
                            <input type='text' placeholder='Enter post caption' />
                        </label>

                        <button type='submit' className='submit-button'>Create Post</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default CreatePost
