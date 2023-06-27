import family from 'public/pictures/family.jpg'
import food from 'public/pictures/food.jpg'
import fun from 'public/pictures/fun.jpg'
import movies from 'public/pictures/movies.jpg'
import son from 'public/pictures/son.jpg'
import us from 'public/pictures/us.jpg'

import Gallery from '../gallery/galery'
import Picture from '../gallery/picture'

export default function FamilyGallery() {
  return (
    <Gallery>
      <Picture src={movies} alt="Movie theater time!" />
      <Picture isWide src={fun} alt="Lightsabers at the market" />
      <Picture src={food} alt="A fancy meal" />
      <Picture src={family} alt="My wife, goddaughters and I" />
      <Picture
        isWide
        src={us}
        alt="My boy, wife and I"
        className="object-top"
      />
      <Picture src={son} alt="My boy and I" />
    </Gallery>
  )
}
