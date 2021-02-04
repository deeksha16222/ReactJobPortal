import { useState, useEffect, useRef } from "react";

function SearchBarForName (props) {
	const [jobName, setJobName] = useState('');
	const jobNameInput = useRef(null);

	const handleChange = (e) => {
		setJobName(e.target.value)
	}

	useEffect(() => {
		jobNameInput.current.focus();
		props.onChange(jobName)
	  }, [jobName]); // eslint-disable-line react-hooks/exhaustive-deps
	
		return (
			<span style={{ display: 'inline-block' }}>
				<label htmlFor="search-what">What</label>
				<input
					id="search-what"
					type="text"
					placeholder="Job title, keywords or company"
					style={{ marginLeft: '10px' }}
					ref={jobNameInput}
					value={jobName}
					onChange={handleChange}
				/>
			</span>
		)
}

export default SearchBarForName;
