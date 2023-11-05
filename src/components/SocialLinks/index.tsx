import React from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'
import { Icon } from '@iconify/react'
import JuejinIcon from '@site/static/svg/juejin.svg'

import styles from './styles.module.scss'

function SocialLink({
  href,
  icon,
  ...prop
}: {
  href: string
  icon: string | JSX.Element
}) {
  return (
    <a href={href} target="_blank" {...prop}>
      {typeof icon === 'string' ? <Icon icon={icon} /> : icon}
    </a>
  )
}

export default function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    juejin: string
    csdn: string
    zhihu: string
    email: string
  }

  return (
    <div className={styles.social__links} {...prop}>
      <SocialLink href={socials.github} icon="ri:github-line" />
      <SocialLink href={socials.juejin} icon={<JuejinIcon />} />
      <SocialLink href={socials.zhihu} icon="ri:zhihu-line" />
    </div>
  )
}
