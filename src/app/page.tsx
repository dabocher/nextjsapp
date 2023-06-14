import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css";

const HomePage = () => {
  return (

    <div >
    <h1>This is the Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ratione. Quis quia, dicta unde quaerat quisquam reprehenderit neque rem, veritatis labore adipisci nemo laboriosam quae amet est culpa earum asperiores.
    Totam ducimus perspiciatis voluptatum, laboriosam, pariatur eum dolorem, perferendis doloremque rem natus repellendus. Dolore dolor obcaecati saepe quasi nostrum eligendi eaque reiciendis, esse exercitationem amet atque ipsa adipisci odit eveniet.
    Omnis cupiditate tempore assumenda porro soluta voluptatem? Autem temporibus ducimus repudiandae placeat accusamus pariatur perferendis ex modi voluptatibus, earum possimus sapiente. Culpa dolores consequuntur vel blanditiis recusandae neque, maxime necessitatibus... porom porom pompero porom pompero porom?</p>
<div className={styles.wrapper}>
<Link className='' href={"/dashboard"}>Go to Dashboard ----</Link>
<Link className='' href={"/another-page"}>Go to Another Page ----</Link></div>
    </div>
  )
}

export default HomePage
