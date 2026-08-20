# Leandro Mendonça DEV · Portfólio Pessoal

> Site portfólio profissional desenvolvido em **HTML, CSS e JavaScript puros**,
> 100% responsivo, pronto para publicação no **GitHub Pages** com domínio personalizado
> e HTTPS automático.

---

## 📖 Sobre o portfólio

Portfólio público de **Leandro Mendonça DEV**: apresenta 20+ anos de experiência
como Técnico de Informática combinados com a atuação como Desenvolvedor Full-Stack
e Mobile Flutter. Inclui:

- Sobre mim · Diferenciais competitivos
- Stack / Habilidades (16 tecnologias usadas em projetos reais)
- **6+ projetos públicos** (cards detalhados):
  - 📱 **Lash Designer Pro** (Flutter · Play Store · `com.lmdev.lashagenda`)
  - 🏫 **Enamus Educação** (Next.js · TailwindCSS · Vercel)
  - 💛 **ONG SAMMA** (Next.js · TypeScript · React)
  - 🖨️ **Gráfica EDJ** (HTML / CSS / JS puro)
  - 🦷 **TotalDen Odontologia** (WordPress · Elementor)
  - 🧹 **Sou Diarista Pro** (placeholder "Em desenvolvimento")
- Linha do tempo de carreira (2004 → hoje)
- CTA final com 4 canais de contato: WhatsApp, E-mail, LinkedIn e GitHub
- Rodapé com links rápidos e ícones sociais

---

## 🎨 Identidade visual

| Propriedade | Valor |
|---|---|
| Cor primária | `#2563EB` (Azul profissional · confiança / TI) |
| Cor destaque (accent) | `#10B981` (Verde entrega · deploy funcionando) |
| Suave | `#EFF6FF` / `#ECFDF5` |
| Dark Navy | `#0F172A` (CTAs e rodapé) |
| Fonte títulos | **Playfair Display** (800/700) |
| Fonte corpo | **Inter** (400 → 700) |
| Breakpoints | `1024px` (tablet) · `768px` (mobile) |
| Raio de borda | `8px → 24px` (escala `radius-sm/md/lg/xl`) |

---

## 📁 Estrutura de arquivos

```
/
├── index.html            ← Página principal (portfólio completo)
├── css/
│   └── styles.css        ← Todo o estilo (100% responsivo)
├── js/
│   └── main.js           ← Navbar, menu mobile, smooth scroll, ano atual
├── assets/
│   └── img/
│       ├── disponivel-google-play.png   ← Selo oficial Play Store (PT-BR)
│       ├── logo-lash.png / hero-lash-mockup.png
│       └── play/           ← Screenshots do app Lash Designer Pro (opcionais)
└── README.md
```

Nenhuma dependência externa de build (npm / webpack / Vite). Para rodar local é
apenas um servidor HTTP estático simples.

---

## 🚀 Como rodar localmente

Escolha **uma das 3 opções abaixo** (qualquer uma funciona em Windows, macOS e Linux):

### Opção A — Live Server (extensão VS Code · mais prática)
1. Abra a pasta do projeto no VS Code
2. Instale a extensão **Live Server** (da Ritwick Dey)
3. Clique com direito em `index.html` → **Open with Live Server**
4. O navegador abre em `http://127.0.0.1:5500/` com auto reload

### Opção B — Python (vem instalado em muitos PCs)
```bash
# Na raiz do projeto
python -m http.server 8080
```
Acesse: http://localhost:8080/

### Opção C — Node.js / npx
```bash
npx http-server -p 8080
```
Acesse: http://localhost:8080/

---

## 📤 Publicação · GitHub Pages + domínio personalizado

### 1) Subir para o GitHub
Crie um repositório público (ex.: `portfolio-leandro-mendonca` ou `leandromendoncadev`)
e envie o conteúdo da pasta raiz para a branch `main`:

```bash
git init
git add .
git commit -m "Initial commit · Portfólio Leandro Mendonça DEV"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<nome-repositorio>.git
git push -u origin main
```

> 💡 **Dica:** Se der erro "Updates were rejected…" (porque o GitHub criou README/.gitignore vazio),
> use:
> ```bash
> git fetch origin && git merge --allow-unrelated-histories origin/main --no-edit
> git push origin main
> ```

### 2) Ativar GitHub Pages
1. Repositório → **Settings** → menu lateral **Pages**
2. **Build and deployment → Source**: **Deploy from a branch**
3. **Branch**: `main` → `/ (root)` → **Save**
4. Aguarda 30~60 segundos → GitHub libera o link temporário:
   `https://<seu-usuario>.github.io/<nome-repositorio>/`

### 3) Domínio personalizado
1. Comprou um domínio (ex.: `leandromendonca.dev.br`, `lmdev.com.br`)?
   Volte no menu **Pages**, campo **Custom domain**, digite o domínio → **Save**.
2. No painel do seu registrador de domínios, crie os registros DNS de vínculo com o
   GitHub Pages conforme a **documentação oficial**:
   👉 https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site
3. Aguarda a propagação do DNS (normalmente 5~15 minutos, podendo chegar a algumas horas).
4. Quando o site abrir diretamente pelo seu domínio, marque a opção **Enforce HTTPS**.

---

## ✅ Observações importantes

| Tópico | Detalhe |
|---|---|
| **LGPD** | Portfólio pessoal. Para projetos que coletam dados (formulários com email/WhatsApp), basta incluir link para política de privacidade caso seja necessário. |
| **Meta tags OG** | Campos `og:url` e `og:image` estão como `#` no HTML. Substitua pelo domínio real do projeto depois que ele estiver no ar com HTTPS. |
| **Google Search Console** | Campo `google-site-verification` está em branco no `<head>`. Basta colar o conteúdo da sua tag de verificação ali. |
| **SEO** | Meta `description`, `keywords` e título já estão preenchidos. Sitemap e robots.txt podem ser adicionados depois (mesmo padrão usado em outros projetos da base). |
| **Acessibilidade** | ARIA labels, `alt` em imagens, contraste mínimo 4.5:1, navegação por teclado e fallback `prefers-reduced-motion` no CSS para animações. |
| **Imagens** | Use preferencialmente **WebP ou PNG otimizado**. Comprima antes com Squoosh/TinyPNG para não deixar o site pesado. |

---

## 📞 Contato

Canais oficiais (também no rodapé do site):

- 💬 **WhatsApp**: link direto no CTA final do portfólio
- 📧 **E-mail**: [leandromen.dev@gmail.com](mailto:leandromen.dev@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/leandromendoncadev](https://www.linkedin.com/in/leandromendoncadev/)
- 🐙 **GitHub**: [github.com/leandromendoncadev](https://github.com/leandromendoncadev)
