import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"

export const metadata = {
  title: 'Another Page',
  description: 'app tutorial',
}

const AnotherPage = () => {
  return (<>
    <h1>Another Page</h1>
    <p>Porque yo lo valgo. Lalalalalallalala Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor corporis ipsum magnam, sed autem aliquam eligendi nisi doloremque ducimus qui ut sit dolores quam vitae ratione? Laboriosam, ipsa minima.
    Similique molestiae voluptatum odio, laboriosam a recusandae perspiciatis nostrum omnis laudantium ducimus totam repudiandae dolor tempore molestias veritatis officia fugiat animi illum id quos amet labore eius. Itaque, optio aperiam?</p>
        <div className={styles.wrapper}>
    <Link className='' href={"/"}>Go back to Home page ----</Link>
    <Link className='' href={"/dashboard"}>Go to Dashboard Page ----</Link></div></>
  )
}

export default AnotherPage
