

class FetchService {
  constructor(url, params={}) {
    this._url = url
    this._params=params
    this._fullUrl = this._buildUrl()
  }

  _buildUrl() {
    if (!Object.keys(this._params).length) {
      return this._url
    }
    else {
      return `${this._url}/${this._params}`
    }
  }

  async fetchApi() {
    const res = await fetch(this._fullUrl)
    const data = await res.json()
    return data
  }
}

export default FetchService