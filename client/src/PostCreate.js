import React, { useState } from 'react'
import axios from 'axios'

const PostCreate = () => {
	const [title, setTitle] = useState('')

	const onSubmit = async event => {
		event.preventDefault()

		await axios.post('http://localhost:400/posts', {
			title
		})

		setTitle('')
	}
	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor=''>Title</label>
					<input
						value={title}
						onChange={event => setTitle(event.target.value)}
						type='text'
						className='form-control mb-3'
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</>
	)
}

export default PostCreate
