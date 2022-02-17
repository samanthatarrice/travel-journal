import location from '../images/location.png'

function Card(props) {
  return (
    <article className='card'>
      <img className='location-img' src={require(`../images/${props.image}`)} alt={props.alt} />
      <div className='card-text'>
        <div className='location-info'>
          <img className='map-pin' src={location} alt='Map pin' />
          <p className='country'>{props.country.toUpperCase()}</p>
          <a href={props.googleMapsUrl} target='_blank' rel='noreferrer'>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <p className='date'>{props.date}</p>
        <p className='description'>{props.description}</p>
      </div>
    </article>
  )
}

export default Card;