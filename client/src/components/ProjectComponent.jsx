import { useState } from "react";

export default function ProjectComponent() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className='w-full h-full rounded-lg border-4 border-white'>
				<form onSubmit={handleSubmit}>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>

					<label htmlFor='description'>Description</label>
					<input
						type='text'
						name='title'
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
					<button
						type='submit'
						className='px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-700 text-white'
					>
						Add Project
					</button>
				</form>
			</div>
		</>
	);
}
