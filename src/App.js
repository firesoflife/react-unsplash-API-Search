import './App.css';
import React, { Fragment, useState } from 'react';
import axios from 'axios';

function App() {
	const [image, setImage] = useState('');
	const clientId = 'SJoYwh9wRf56F4ikb9bYYtCNHDrxtg8pKP57HXgtY64';
	const [result, setResult] = useState([]);

	const handleChange = e => {
		setImage(e.target.value);
	};

	const handleSubmit = () => {
		const url =
			'https://api.unsplash.com/search/photos?page=1&query=' +
			image +
			'&client_id=' +
			clientId;

		axios.get(url).then(response => {
			setResult(response.data.results);
		});
	};

	return (
		<div className='App'>
			<div className='heading'>
				<h1>React Image Search Using Unsplash API.</h1>
			</div>
			<div className='input'>
				<input
					onChange={handleChange}
					type='text'
					name='image'
					placeholder='Search for images'
				/>
			</div>
			<button onClick={handleSubmit} type='submit'>
				Search
			</button>
			<div className='result'>
				{result.map(image => (
					<Fragment>
						<div className='card'>
							<img src={image.urls.thumb} alt='' />
							<p className='username'>Photo by {image.user.name} </p>
							<p className='like'>{image.likes} </p>
						</div>
					</Fragment>
				))}
			</div>
		</div>
	);
}

export default App;
