export default function fetchCats (keyword, page = 1) {
    const apiKey = '9df9f716c535e20573c4d5fc7336e3c6'
    return fetch(
      'https://api.flickr.com/services/rest/' +
      '?method=flickr.photos.search' +
      '&api_key=' + apiKey +
      '&page=' + page +
      '&tags=' + keyword +
      '&format=json' +
      '&nojsoncallback=1'
    )
    .then(response => response.json())
    .then(body => body.photos.photo)
    .then(photos => photos.map(photo =>
      `https://farm${photo.farm}.staticflickr.com/` +
      `${photo.server}/${photo.id}_${photo.secret}_q.jpg`
    ))
  }