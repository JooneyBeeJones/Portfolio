import React from 'react';
import data from './project-data';

function Project() {
	return(
		<div className='project-section'>
	        <h2 className='project-title'>Projects</h2>
	        {Object.keys(data).map((datas) =>(
	        	<div className='item' >
	        		<div className='item-title'>{datas}</div>
	        		<a href="#"><img className='item-img' src={data[datas].imgFile} alt={data[datas].description} /></a>
        			<div className='item-subsection'> 
        				{data[datas].programs.map(code => (
        					<p className='item-bubble'>{code}</p>
        				))}
        			</div>
	        	</div>
	        ))}
      	</div>
	);
}

export default Project;