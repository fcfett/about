declare module '*.svg' {
  import { FC, HTMLProps } from 'react'
  const ReactComponent: FC<HTMLProps<HTMLImageElement>>
  export default ReactComponent
}

