<div align="center">

# Master Learn Front

[Demo Online](#demo-online) • [Instalação](#instalação) • [Scripts](#scripts) • [Tecnologias](#tecnologias)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel&logoColor=white)

</div>

---

### Sumário
- [Introdução](#introdução)
- [Demo Online](#demo-online)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts](#scripts)
- [Tecnologias](#tecnologias)
- [Saiba Mais](#saiba-mais)

# Introdução

**Master Learn Front** é o frontend do projeto **Master Learn**, construído com **Next.js 16** e **React 19**. É o consumidor da API [`master-learn-backend`](https://github.com/cmarinho-dev/master-learn-backend), servida em FastAPI.

# Demo Online

A aplicação está publicada na Vercel:

👉 [master-learn-phi.vercel.app](https://master-learn-phi.vercel.app)

# Pré-requisitos

- **Node.js**;
- Um gerenciador de pacotes (`npm`, `yarn`, `pnpm` ou `bun`).

# Instalação

```sh
git clone https://github.com/cmarinho-dev/master-learn-front.git
cd master-learn-front
npm install
```

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

Abra [`http://localhost:3000`](http://localhost:3000) no navegador para ver o resultado. A página pode ser editada a partir de `app/page.tsx` — as alterações aparecem automaticamente.

O projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar a fonte **Geist**.

# Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Sobe o servidor com o build de produção |
| `npm run lint` | Executa o ESLint no projeto |

# Tecnologias

- **Next.js 16** — framework React (App Router);
- **React 19** + **React DOM**;
- **TypeScript**;
- **TailwindCSS 4** (via `@tailwindcss/postcss`) — estilização;
- **lucide-react** — ícones;
- **ESLint** — padronização e qualidade de código.

# Saiba Mais

Para aprender mais sobre o Next.js, confira:

- [Documentação do Next.js](https://nextjs.org/docs) — funcionalidades e API;
- [Learn Next.js](https://nextjs.org/learn) — tutorial interativo;
- [Repositório do Next.js no GitHub](https://github.com/vercel/next.js).

O deploy mais simples de uma aplicação Next.js é através da [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) — veja a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

---

<div align="center">

Feito com Next.js + React, parte do ecossistema Master Learn.

</div>
