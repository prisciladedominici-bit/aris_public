import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "ARIS2025") {
      document.cookie = `chat-password=${password}; path=/`;
      router.push("/chat");
    } else {
      alert("Contraseña incorrecta 🔒");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Ingresa la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button type="submit" style={{ marginLeft: "8px", padding: "8px 16px" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
