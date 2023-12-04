import React from 'react'

import './styles.scss'
import { Icons } from '../../assets/CustomIconsDomains'

interface LinkComponentProps {
  name: string
  url: string
}

const Link: React.FC<LinkComponentProps> = ({ name, url }: LinkComponentProps) => {
  return (
    <a href={url} className="LinkComponent">
      <div className="Icon">
        <Icons icon={name} />
      </div>
      <span>{name}</span>
    </a>
  )
}

export { Link }
