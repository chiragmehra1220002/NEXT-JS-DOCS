import styles from "./api.module.css"
export default async function Page() {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    return (
        <ul className={styles.section1}>
        {data.map((currElem: any) => {
          const { id, title, body } = currElem;
          return (
            <li key={id}>
              <h1>{title}</h1>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
     
    )
  }


    
   