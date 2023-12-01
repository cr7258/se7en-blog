import React, { memo } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'
import { type OpenSource } from '@site/data/opensource'
import Tooltip from '../../../project/_components/ShowcaseTooltip'

const OpenSourceCard = memo(({ opensource }: { opensource: OpenSource }) => (
  <li
    key={opensource.name}
    className={clsx(styles.openSourceCard, 'padding-vert--sm padding-horiz--md')}
  >
    <img
      src={
        typeof opensource.logo === 'string'
          ? opensource.logo
          : (opensource.logo as any)?.src?.src
      }
      alt={opensource.name}
      className={clsx(styles.openSourceCardImage)}
    />
    <div className={styles.openSourceCardBody}>
      <div className={clsx(styles.openSourceCardHeader)}>
        <h4 className={styles.openSourceCardTitle}>
          <Link href={opensource.href} className={styles.openSourceCardLink}>
            {opensource.name}
          </Link>
        </h4>
      </div>
      <Tooltip
        key={opensource.name}
        text={opensource.desc}
        anchorEl="#__docusaurus"
        id={`tooltip-${opensource.name}`}
      >
        <p className={styles.openSourceCardDesc}>{opensource.desc}</p>
      </Tooltip>
    </div>
  </li>
))

export default OpenSourceCard
