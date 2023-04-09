import React from 'react'
import Comments from './Comments'

export default function Post({title, text, comments}) {
  return (
    <div>
        <p>Title: {title}</p>
        <p>Text: {text} </p>
        <div>
            Comments:
                {comments.map(el=> <Comments key={el.id} {...el}/>)
            }
        </div>
    </div>
  )
}
