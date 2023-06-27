import fogo from '/public/pictures/fogo.gif'
import hiding from '/public/pictures/hiding.gif'
import lasier from '/public/pictures/lasier.gif'
import magic from '/public/pictures/magic.gif'
import mindblow from '/public/pictures/mindblow.gif'
import nazare from '/public/pictures/nazare.gif'

import Gallery from '../gallery/galery'
import Picture from '../gallery/picture'

export default function MemesGallery() {
  return (
    <Gallery>
      <Picture src={mindblow} alt="Mindblow .gif" />
      <Picture src={magic} alt="Shia LaBeouf Magic .gif" />
      <Picture src={hiding} alt="Homer Simpson hiding .gif" />
      <Picture src={lasier} alt="Lasier Martins taking a shock .gif" />
      <Picture src={fogo} alt="Faustão on fire .gif" />
      <Picture src={nazare} alt="Nazaré Tedesco calculating .gif" />
    </Gallery>
  )
}
