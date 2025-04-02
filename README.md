# Portfólio de Fotografia - Luana Furtado

Este é um site de portfólio fotográfico moderno e minimalista, desenvolvido para destacar as fotografias de Luana Furtado.

## Características

- **Design Minimalista:** Foco total nas imagens sem elementos textuais desnecessários
- **Galeria Interativa:** Exibição dinâmica das fotografias com carrosséis e efeitos de transição
- **Layout Responsivo:** Experiência perfeita em qualquer dispositivo
- **Animações Modernas:** Transições suaves e efeitos de hover contemporâneos
- **Tipografia Elegante:** Nome estilizado com posicionamento sofisticado

## Tecnologias Utilizadas

- React com TypeScript
- Styled Components para estilização
- Framer Motion para animações
- Design responsivo para todos os tamanhos de tela

## Estrutura do Projeto

```
src/
  ├── components/          # Componentes React reutilizáveis
  │   ├── Carousel.tsx     # Componente de carrossel para imagens em destaque
  │   ├── Gallery.tsx      # Galeria interativa de fotos
  │   ├── Header.tsx       # Cabeçalho com nome estilizado
  │   └── Layout.tsx       # Layout principal da aplicação
  ├── data/
  │   └── sampleData.ts    # Dados de amostra das fotografias
  ├── types/
  │   └── index.ts         # Tipos TypeScript para o projeto
  ├── App.tsx              # Componente principal
  ├── App.css              # Estilos globais CSS
  └── index.tsx            # Ponto de entrada da aplicação
```

## Executando o Projeto

1. Clone o repositório:
```
git clone [URL_DO_REPOSITORIO]
```

2. Instale as dependências:
```
npm install
```

3. Execute o projeto:
```
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

## Personalização

Para personalizar o portfólio com suas próprias fotografias, substitua os dados de amostra em `src/data/sampleData.ts` com suas próprias imagens.

## Licença

Todos os direitos reservados © Luana Furtado
