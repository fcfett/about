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
        imagePosition="bottom"
        caption={'Shows\n(KsE ❤)'}
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
        style={{ zIndex: 0 }}
        imagePosition="bottom"
        className="-translate-x-3"
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
