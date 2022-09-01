import React, { useState } from 'react'
import axios from 'axios'

const CommentCreate = ({ postId }) => {
	const [content, setContent] = useState('')

	const onSubmit = async event => {
		event.preventDefault()

		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content
		})

		setContent('')
	}

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='' >New Comment</label>
					<input
						type='text'
						value={content}
						onChange={event => setContent(event.target.value)}
						className='form-control mb-3'
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</>
	)
}

export default CommentCreate