import FetchService from './FetchService'

class MovieService {
  constructor() {
    this.movie_url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
  }
  async getAllMovies() {
    return await new FetchService(this.movie_url).fetchApi()
    .catch(err=>console.error)
  }

  async getMovieById(id) {
    try {
      return await new FetchService(this.movie_url, id).fetchApi()
      .catch(err=>console.error)
    }
    catch(err) {
      console.error(err)
    }
  }

  
}


export default new MovieService()