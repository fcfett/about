import alldaylong from '/public/pictures/alldaylong.jpg'
import band from '/public/pictures/band.jpg'
import playtogether from '/public/pictures/playtogether.jpg'
import shows from '/public/pictures/shows.jpg'

import Gallery from '../gallery/galery'
import Picture from '../gallery/picture'

export default function MusicGallery() {
  return (
    <Gallery>
      <Picture src={alldaylong} alt="All Day Long" caption="All day long..." />
      <Picture
        isWide
        src={shows}
        alt="Shows"
        caption={'Shows\n(KsE ❤)'}
        className="object-bottom"
      />
      <Picture
        src={playtogether}
        alt="Family Business"
        caption="Family Business"
      />
      <Picture
        isWide
        src={band}
        alt="Band"
        className="object-bottom"
        caption={
          <>
            Yep, I had a{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtu.be/zNM4x-Oapw0"
            >
              band
            </a>
            ...
          </>
        }
      />
    </Gallery>
  )
}
