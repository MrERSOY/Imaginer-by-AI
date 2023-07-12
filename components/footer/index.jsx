import Link from "next/link";
import GithubIcon from "@/assets/icons/github.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/" target="_blank">
        <GithubIcon />
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        <TwitterIcon />
      </Link>
      <p>
        This is the project I&apom working on to find out. I didn&apot create
        it. Just copy.
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
}

export { Footer };
