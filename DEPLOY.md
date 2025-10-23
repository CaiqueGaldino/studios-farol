# Studios Farol - Deploy no GitHub Pages

## 🚀 Como fazer deploy

### Método 1: Deploy Automático (Recomendado)

O deploy é feito automaticamente via GitHub Actions sempre que você fizer push para a branch `main`.

#### Configuração inicial no GitHub:

1. Vá em **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione **GitHub Actions**
3. Pronto! A cada push na branch `main`, o site será atualizado automaticamente

### Método 2: Deploy Manual

Se preferir fazer deploy manualmente:

```bash
npm run build
npm run deploy
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Acessar em http://localhost:3000
```

## 📦 Build de Produção

```bash
# Criar build otimizado
npm run build

# A pasta 'out' conterá os arquivos estáticos
```

## 🌐 URL do Site

Após o deploy, seu site estará disponível em:
```
https://caiquegaldino.github.io/studios-farol/
```

## ⚙️ Configurações

### next.config.ts
- **output: 'export'** - Exporta site como HTML estático
- **images.unoptimized: true** - Desabilita otimização de imagens (necessário para export)
- **basePath** - Define o caminho base para GitHub Pages

### .nojekyll
Arquivo vazio na pasta `public` que desabilita o processamento Jekyll do GitHub Pages, permitindo que arquivos começando com `_` funcionem corretamente.

## 📝 Notas Importantes

1. **Imagens e Assets**: Use caminhos relativos começando com `/studios-farol/` para produção
2. **Rotas Dinâmicas**: Não são suportadas no modo export estático
3. **API Routes**: Não funcionam no GitHub Pages (apenas frontend)
4. **Variáveis de Ambiente**: Configure no GitHub Actions se necessário

## 🔧 Troubleshooting

### Build falha no GitHub Actions
- Verifique os logs em **Actions** no GitHub
- Certifique-se de que `npm run build` funciona localmente

### CSS não carrega
- Verifique se o `basePath` está correto no `next.config.ts`
- Limpe o cache: `rm -rf .next && npm run build`

### Imagens não aparecem
- Use `unoptimized: true` em `next.config.ts`
- Verifique os caminhos das imagens

## 📚 Recursos

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
