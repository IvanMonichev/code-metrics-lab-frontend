import type { PropsWithChildren } from 'react'

import styles from './panel.module.css'

const Container = ({ children }: PropsWithChildren) => (
  <div className={styles.container}>{children}</div>
)

type PanelProps = {
  title?: string
}

const Panel = ({ children, title }: PropsWithChildren<PanelProps>) => {
  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2 className={styles.panelTitle}>{title}</h2>
      </div>
      {children}
    </section>
  )
}

Panel.Container = Container
export default Panel
