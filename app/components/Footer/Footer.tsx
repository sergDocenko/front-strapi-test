import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = async () => {
  const url = process.env.STRAPI_API_URL + "/footer-socials?populate=icon";
  const strapiToken = process.env.API_TOKEN_STRAPI;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `bearer ${strapiToken}`,
    },
    cache: "no-cache",
  });
  const { data } = await res.json();

  return (
    <footer className={styles.footer}>
      <menu className={styles.menu}>
        {data.map((item: any) => (
          <li key={item.id}>
            <Image
              src={item.attributes.icon.data.attributes.url}
              alt={item.attributes.name}
              width={30}
              height={30}
            />
            <a href={item.attributes.link}>{item.attributes.name}</a>
          </li>
        ))}
      </menu>
    </footer>
  );
};

export default Footer;
