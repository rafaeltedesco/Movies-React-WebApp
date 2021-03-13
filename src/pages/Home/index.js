import {Component} from 'react'
import MovieService from './../../services/MovieService'
import './home.css'
import MovieCard from './../../components/MovieCard'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
    this.getMovies = this.getMovies.bind(this)
  }

  async getMovies() {
    const movies = await MovieService.getAllMovies()
    if(movies.length) {
        this.setState({movies: movies})
    }
  }

  componentDidMount() {
    this.getMovies()  
  }

  render(){
    return(
      <section className="Home">
        {this.state.movies && 
        this.state.movies.map(movie=> {
          return (
            <MovieCard id={movie.id} nome={movie.nome} foto={movie.foto} />
          )
        })}
      </section>
    )
  }
}

export default Home