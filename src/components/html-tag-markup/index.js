import React from 'react';

import './index.css';

const TagBodyMarkup = () => {
	return (
		<div>
			<span className="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
			<span className="tags bottom-tags">
				&nbsp;&nbsp;&nbsp;&lt;/body&gt;<br /> &lt;/html&gt;
			</span>
		</div>
	);
};

export default TagBodyMarkup;
