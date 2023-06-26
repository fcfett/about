import { FC, HTMLProps } from 'react'

import CodePenIcon from '/public/icons/codepen.svg'
//import FacebookIcon from '/public/icons/facebook.svg'
import GitHubIcon from '/public/icons/github.svg'
import InstagramIcon from '/public/icons/instagram.svg'
import LinkedInIcon from '/public/icons/linkedin.svg'

type Icon = FC<HTMLProps<HTMLImageElement>>

type Link = {
  url: string
  name: string
  Icon: Icon
}

const LINKS: Link[] = [
  {
    url: 'https://linkedin.com/in/fcfett',
    name: 'LinkedIn',
    Icon: LinkedInIcon,
  },
  {
    url: 'https://github.com/fcfett',
    name: 'GitHub',
    Icon: GitHubIcon,
  },
  {
    url: 'https://codepen.io/fcfett/',
    name: 'CodePen',
    Icon: CodePenIcon,
  },
  {
    url: 'https://instagram.com/fcfett/',
    name: 'Instagram',
    Icon: InstagramIcon,
  },
  /* {
    url: 'https://facebook.com/fcfett',
    name: 'Facebook',
    Icon: FacebookIcon,
  }, */
]

export default function Social() {
  return (
    <>
      <h1 className="font-serif text-4xl font-black">@fcfett</h1>
      <ul className="my-auto flex flex-wrap items-center justify-around gap-x-8 gap-y-4 ">
        {LINKS.map(({ name, url, Icon }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="relative flex flex-col items-center gap-2 text-center hover:underline"
            >
              <Icon
                alt={`${name} icon`}
                className="h-[15vmin] max-h-[12rem] max-w-[12rem]"
              />
              <h2 className="font-serif text-2xl font-bold">{name}</h2>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
