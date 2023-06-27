import Modal from '../modal'
import BeerGallery from './beer-gallery'
import FamilyGallery from './family-gallery'
import MemesGallery from './memes-gallery'
import MusicGallery from './music-gallery'

const PASSIONS = [
  { id: 'music-modal', label: 'Music 🎙', ModalContent: MusicGallery },
  { id: 'beer-modal', label: 'Beer 🍻', ModalContent: BeerGallery },
  { id: 'memes-modal', label: 'Memes 💩', ModalContent: MemesGallery },
  { id: 'family-modal', label: 'Family 🖤', ModalContent: FamilyGallery },
]

export default function OtherPassions() {
  return (
    <>
      <h1 className="pr-6 font-serif text-4xl font-black uppercase">
        Other passions
      </h1>
      <ul className="flex flex-1 flex-col items-center justify-center gap-4 font-serif text-[3vmax] font-semibold">
        {PASSIONS.map(({ id, label, ModalContent }) => (
          <li key={id}>
            <Modal id={id} label={label}>
              <ModalContent />
            </Modal>
          </li>
        ))}
      </ul>
    </>
  )
}
