import React from 'react';

const ShowCard = (props) => {
  const {poster, title, year, description} = props.show;
  return (
    <div className='show-card'>
      <img src={`/public/img/posters/${poster}`} />
      <div>
        <h3>{title}</h3>
        <h4>{year}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

ShowCard.propTypes = {
  show: React.PropTypes.object.isRequired
};
export default ShowCard;
