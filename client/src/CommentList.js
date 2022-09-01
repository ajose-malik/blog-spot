import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CommentList = ({ postId }) => {
	const [comments, setComments] = useState([])

	const fetchData = async () => {
		const response = await axios.get(
			`http://localhost:4001/posts/${postId}/comments`
		)

		setComments(response.data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const renderedComments = comments.map(comment => (
		<li key={comment.id}>{comment.content}</li>
	))

	return <ul>{renderedComments}</ul>
}

export default CommentList
