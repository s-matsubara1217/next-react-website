import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function Decoration({children}) {
  return (
    <div style={{ color: 'red' }}>
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <Decoration>
      <h1>CUBE</h1>
      <p>テキスト</p>
    </Decoration>
  )
}
