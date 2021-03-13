import {Component} from 'react'
import './movieCard.css'
import {Link} from 'react-router-dom'

class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.movie = {...props}
  }
  render() {
    return (
      <article className="Card" key={this.movie.id}>
        <div className="CardBox">
          <h2><Link to={`/filmes/${this.movie.id}`}>{this.movie.nome}</Link></h2>
          <img src={this.movie.foto} alt={this.movie.nome} />
          <Link className="BtnFilme" to={`/filmes/${this.movie.id}`}>Saiba Mais</Link>
        </div>
      </article>
    )
  }
}


export default MovieCard