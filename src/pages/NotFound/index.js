import {Component} from 'react'
import {Link} from 'react-router-dom'
import './notFound.css'

class NotFound extends Component {
  render(){
    return(
      <section className="Page404">
        <article className="notFoundBox">
          <h2>Oops... 😢<br />Página Não Encontrada...</h2>
          <Link to="/">Voltar para Home</Link>
        </article>
      </section>
    )
  }
}

export default NotFound