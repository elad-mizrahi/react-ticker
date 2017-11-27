import React, {PropTypes} from 'react';
import PreviewListRow from './PreviewListRow';

const PreviewPage = (data) => {

   return(
    <div className="preview-container">
         
         {data.data.map((item, index) => <PreviewListRow key={index} data={item} />)} 
         
    </div>
  );
};
 
export default PreviewPage;
