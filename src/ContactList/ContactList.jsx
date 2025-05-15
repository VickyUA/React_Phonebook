import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
// import { useState } from "react";

export default function ContactList() {
  const readyList = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  //   const [contact, setContact] = useState(readyList);

  return (
    <div>
      <ul className={css.list}>
        {readyList.map((contact) => {
          return (
            <li key={contact.id} className={css.liWrapper}>
              <Contact name={contact.name} number={contact.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
