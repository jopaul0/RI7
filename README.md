# Calculadora TS (RI7)

Este projeto faz parte das atividades de **RI (Repositório de Instruções)**, focado no desenvolvimento de uma calculadora robusta utilizando **Node.js** e **TypeScript**. O objetivo central é a aplicação prática de conceitos de **Programação Orientada a Objetos (POO)** e o domínio da sintaxe rigorosa do TypeScript.

## Foco em Sintaxe TypeScript

Diferente de um projeto em JavaScript comum, este repositório destaca recursos avançados da linguagem para garantir segurança e escalabilidade:

* **Classes Abstratas:** Implementação da classe base `Operacao`, que define um modelo para todas as operações matemáticas através de métodos abstratos.
* **Interfaces:** Implementação da interface `ICalculavel`, que define um contrato obrigatório implementado na classe abstrata.
* **Herança e Polimorfismo:** As operações (Soma, Subtração, etc.) estendem a classe base, reutilizando estrutura e garantindo consistência no método `calcular`.
* **Tipagem Estática:** Uso rigoroso de tipos (`number`, `string`, `void`) em parâmetros e retornos para evitar erros de lógica durante o desenvolvimento.
* **Gestão de Módulos:** Organização profissional utilizando `import` e `export` para separação de responsabilidades em diretórios distintos.

---

## Estrutura de Pastas

A organização do código foi pensada para separar a lógica de negócio da interface com o utilizador:

* **`src/core/`**: O "coração" do projeto, contendo a classe abstrata pai e todas as subclasses de operações.
* **`src/helpers/`**: Classes utilitárias, como a `Mensagens`, que centralizam a comunicação com o utilizador.
* **`src/interface`**: Contratos a serem implementados.
* **`src/index.ts`**: Ponto de entrada que gere o fluxo de entrada de dados via `readline`.

---

## Como Executar

1.  **Instale as dependências (incluindo @types/node):**
    ```bash
    npm install
    ```
2.  **Execute em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
3.  **Compilação para JavaScript:**
    ```bash
    npm run build
    ```

---

## Funcionalidades

* [x] **Soma**: Implementação de adição.
* [x] **Subtração**: Implementação de diferença.
* [x] **Multiplicação**: Implementação de produto.
* [x] **Divisão**: Implementação de quociente.
* [x] **Potenciação**: Uso do operador exponencial.
* [x] **Radiciação**: Cálculo de raízes.
* [x] **Bhaskara**: Cálculo das raízes.

---

## Easter Egg

Atenção, Professor! Mantendo a tradição, há um Easter Egg pelas mensagens... Achou que não teria mais?
> Não contava com a minha astúcia

---

## Autor

**Desenvolvido por João Paulo (@jopaul0)**
*Estudante de ADS | 3° Semestre - FATEC São José dos Campos*

---

Este projeto foi criado estritamente para fins didáticos.