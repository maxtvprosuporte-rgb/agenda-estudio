import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

/* ===== MIDDLEWARES ===== */
app.use(cors());
app.use(express.json());

/* ===== LOGIN (TEMPORÁRIO) ===== */
app.post("/api/login", (req, res) => {
  const { tipo, senha } = req.body;

  // LOGIN SIMPLES (provisório)
  if (tipo === "admin" && senha === "admin123") {
    return res.json({ ok: true, tipo: "admin" });
  }

  if (tipo === "usuario" && senha === "123") {
    return res.json({ ok: true, tipo: "usuario" });
  }

  return res.status(401).json({ ok: false, mensagem: "Login inválido" });
});

/* ===== ROTA TESTE ===== */
app.get("/api/teste", (req, res) => {
  res.json({ status: "Back-end funcionando 🚀" });
});

/* ===== INICIAR SERVIDOR ===== */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
