import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="grid grid-cols-3 gap-4">
        <div className="px-8 py-4 bg-purple-500 hover:bg-blue-500 cursor-pointer ease-in-out duration-3000 text-white rounded">
          01
        </div>
        <div className="px-8 py-4 bg-purple-500 text-white rounded">02</div>
        <div className="px-8 py-4 bg-purple-500 text-white rounded">03</div>
        <div className="px-8 py-4 bg-pink-500 text-white rounded">04</div>
        <div className="px-8 py-4 bg-purple-500 text-white rounded">05</div>
        <div className="px-8 py-4 bg-purple-500 text-white rounded">06</div>
        <div className="px-8 py-4 bg-purple-500 text-white rounded">07</div>
        <div className="px-8 py-4 bg-purple-500 text-white rounded">09</div>
      </div>
    </main>
  )
}
