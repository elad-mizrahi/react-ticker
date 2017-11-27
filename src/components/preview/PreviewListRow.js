import React, {PropTypes} from 'react';

const PreviewListRow = (data) => {
        return (
                <div className={"preview-list-row " + data.data.style}  >
                    <div className="inner-content">
                        <p className="text-data">
                            <img className="image" src={data.data.imageUrl} />
                            <span className="name-data">{data.data.name}</span> <br/>
                            <span className="time-data">{data.data.date} {data.data.time}</span>
                            {data.data.text}
                        </p>
                    </div>
                </div>
        );
};

PreviewListRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default PreviewListRow;
