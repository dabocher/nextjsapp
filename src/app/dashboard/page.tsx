import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"

export const metadata = {
  title: 'Dashboard Page',
  description: 'app tutorial',
}

const DashboardPage = () => {
  return (<>
    <h1>This is the Dashboard page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus tempora modi aliquam nemo delectus consequuntur, soluta eligendi repudiandae, nesciunt quidem iure rerum voluptatibus totam ullam explicabo perspiciatis eius est.
    Molestiae laboriosam quae labore eligendi recusandae harum, eaque nostrum quis ducimus repellat beatae ratione iusto nam, cumque quas eius nulla doloribus ut, tempora fugit facere sunt repudiandae reprehenderit. Sed, perspiciatis!
    Iste itaque, excepturi hic facere esse quae alias minima mollitia atque qui fuga autem quidem nostrum magni error corrupti aspernatur. Nam blanditiis harum nesciunt repudiandae laboriosam deleniti aut voluptas ex! Lolololo lololololo loololoololloo</p>
    <div className={styles.wrapper}>
    <Link className='' href={"/"}>Go back to Home page ----</Link>
    <Link className='' href={"/another-page"}>Go to Another Page ----</Link></div>
  </>)

}

export default DashboardPage
