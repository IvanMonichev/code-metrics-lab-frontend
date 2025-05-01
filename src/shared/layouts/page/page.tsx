import styles from '@/shared/layouts/page/page.module.css'
import type { FC, PropsWithChildren } from 'react'

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.content}>{children}</section>
}

const LeftBar: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.leftBar}>{children}</div>
}

type HeaderProps = {
  title?: string
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  return <header className={styles.header}>{children}</header>
}

const Page = ({ children }: PropsWithChildren) => {
  return <main className={styles['main']}>{children}</main>
}

Page.Header = Header
Page.LeftBar = LeftBar
Page.Content = Content
export default Page
