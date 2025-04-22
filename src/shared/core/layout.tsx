import { Typography } from 'antd'
import type { FC, PropsWithChildren } from 'react'
import styles from './layout.module.css'

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.content}>{children}</section>
}

const LeftBar: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.leftBar}>{children}</div>
}

type HeaderProps = {
  title?: string
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({ children, title }) => {
  return (
    <header className={styles.header}>
      {title && (
        <Typography.Title className={styles.title}>{title}s</Typography.Title>
      )}
      {children}
    </header>
  )
}

const Layout = ({ children }: PropsWithChildren) => {
  return <main className={styles['main']}>{children}</main>
}

Layout.Page = Layout
Layout.Header = Header
Layout.LeftBar = LeftBar
Layout.Content = Content
export default Layout
