import bqc from '../../../public/pictures/bqc.jpg'
import craft from '../../../public/pictures/craft.jpg'
import festival from '../../../public/pictures/festival.jpg'
import morebeer from '../../../public/pictures/morebeer.jpg'

import Gallery from '../../components/gallery/galery'
import Picture from '../../components/gallery/picture'

export default function BeerGallery() {
  return (
    <Gallery>
      <Picture alt="Our craft beers labels" src={craft} />
      <Picture isWide alt="Beer festivals" src={festival} />
      <Picture alt="More festivals with my love" src={morebeer} />
      <Picture
        isWide
        alt="My deceased YouTube channel"
        src={bqc}
        className="translate-x-3"
        caption={
          <>
            Once uppon a time on{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com/bahqueceva"
            >
              YouTube
            </a>
            <br />
            <small>(Bah, Que Ceva)</small>
          </>
        }
      />
    </Gallery>
  )
}
