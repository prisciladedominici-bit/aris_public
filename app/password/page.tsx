"use client";
import { useState } from "react";

export default function PasswordPage() {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(
    typeof window !== "undefined" &&
      new URL(window.location.href).searchParams.get("error")
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "?pw=" + pw;
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#faf8fc",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "white",
          padding: "30px",
          borderRadius: "18px",
          boxShadow:
            "0 4px 14px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.02)",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <h2
          style={{
            marginBottom: "18px",
            fontSize: "22px",
            fontWeight: "500",
            color: "#222",
          }}
        >
          Ingresá la contraseña
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Contraseña"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "15px",
              marginBottom: "15px",
              outline: "none",
            }}
          />

          {error && (
            <p
              style={{
                color: "#d14",
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              La contraseña es incorrecta
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#222",
              color: "white",
              padding: "12px",
              borderRadius: "12px",
              fontSize: "15px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
