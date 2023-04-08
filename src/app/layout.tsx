import { Metadata } from 'next'

import '@/style/reset.css'

export const metadata: Metadata = {
    title: {
        default: 'Altanka',
        template: '%s | Altanka',
    },
    description: 'Generated by create next app',
    authors: [{ name: 'Vasilenko Renat', url: 'https://github.com/mudaston' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ru'>
            <body>{children}</body>
        </html>
    )
}
