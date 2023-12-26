"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const [inputValue, setInputValur] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`prediction/${inputValue}`);
  };

  return (
    <div>
      <div>
        <h1>Enter your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type yout name"
          onChange={(e) => setInputValur(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
