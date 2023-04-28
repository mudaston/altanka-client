import Link from 'next/link'

const MobileMenu = () => {
  return (
    <header className='alt-p-sm' style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2>Altanka</h2>
      <nav>
        <ul style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { MobileMenu }
