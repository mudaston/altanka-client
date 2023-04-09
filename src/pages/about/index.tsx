import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      About page
      <br />
      <Link href='/'>To home page</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link href='about/me?name=Renat%20Vasilenko'>To the &apos;Me&apos; page</Link>
    </>
  )
}
