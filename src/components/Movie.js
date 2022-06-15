import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Movie = ({ id, title, medium_cover_image, summary, genres }) => {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={medium_cover_image} />
      <p>{summary}</p>
      <ul>
        {genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <hr />
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Movie
