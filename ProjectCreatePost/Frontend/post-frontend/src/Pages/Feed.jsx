import { useState ,useEffect} from 'react'
import axios from 'axios'

const Feed = () => {
  const [posts , setPosts] = useState([
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1783586856710-18073cc55d4d?w=900&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fG42OGkxSGduSGVjfHxlbnwwfHx8fHw%3D',
      caption: 'Sunset reflections from my latest trip.',
      author: 'Aarav'
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
      caption: 'Morning coffee and code sessions.',
      author: 'Mira'
    },
    
  ])


  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{

     setPosts(res.data.posts)
      
    })
  },[])

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm uppercase tracking-[0.24em] text-cyan-300'>Feed</p>
              <h1 className='mt-2 text-3xl font-semibold text-white sm:text-4xl'>Your Posts</h1>
              <p className='mt-3 max-w-2xl text-slate-400'>Browse your recent content in a clean responsive grid with Tailwind styling.</p>
            </div>
          </div>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/95 shadow-xl shadow-slate-950/40'
            >
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className='h-72 w-full object-cover transition duration-300 ease-in-out hover:scale-105'
              />
              <div className='space-y-4 p-6'>
                <div className='flex items-center justify-between gap-3'>
                  <span className='rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300'>Post #{post.id}</span>
                  <span className='text-sm text-slate-400'>by {post.author}</span>
                </div>
                <p className='text-base leading-7 text-slate-100'>{post.caption}</p>
                <button className='inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400'>View details</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feed
