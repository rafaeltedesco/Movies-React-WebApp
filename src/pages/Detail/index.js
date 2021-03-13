import {Component} from 'react'
import MovieService from './../../services/MovieService'
import {Link} from 'react-router-dom'
import './detail.css'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
    this.getMovie = this.getMovie.bind(this)
  }

  async getMovie() {
    let {id} = this.props.match.params 
    const movie = await MovieService.getMovieById(id)
    if (Object.keys(movie).length) {
      this.setState({movie: movie})
    }
  }

  componentDidMount(){
    this.getMovie()
  }

  render(){
    return(  
        <article className="Detail">
          <div className="InnerDetail">
            <div className="BoxDetail">
              <h2>{this.state.movie.nome}</h2>
              <img src={this.state.movie.foto} alt={this.state.movie.nome} />
              <p><strong>Sinopse:</strong><br />{this.state.movie.sinopse}</p>
              <p><Link to="/">Voltar para Home</Link></p>
            </div>
          </div>
        </article>
        )
  }
}

export default Movie