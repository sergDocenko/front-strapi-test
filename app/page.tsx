import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import markdownToHTML from "./helpers/morkdownToHTML";

export default async function Home() {
  // const url = process.env.STRAPI_API_URL + "/home";
  // const strapiToken = process.env.API_TOKEN_STRAPI;
  // const res = await fetch(url, {
  //   method: "GET",
  //   headers: {
  //     Authorization: `bearer ${strapiToken}`,
  //   },
  //   cache: "no-cache",
  // });
  // const { data } = await res.json();
  // const content = await markdownToHTML(data.attributes.content);  

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        oiernvoiernvoiern
        {/* <h1>{data.attributes.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: content }}></section> */}
      </div>
    </main>
  );
}
