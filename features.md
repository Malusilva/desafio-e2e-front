# Funcionalidades do Sistema DemoQA

## 1. Web Tables

### Feature: Gerenciamento de Registros em Tabela Web

#### Cenário 1: Adicionar Novo Registro
Dado que estou na página de Web Tables
Quando clico no botão "Add"
E preencho os campos do formulário com:
  | Campo      | Valor               |
  |------------|---------------------|
  | First Name | Maria              |
  | Last Name  | Luciano            |
  | Email      | maria.luciano@test.com |
  | Age        | 38                 |
  | Salary     | 10000              |
  | Department | QA                 |
E clico em Submit
Então o novo registro deve aparecer na tabela

#### Cenário 2: Editar Registro Existente
Dado que estou na página de Web Tables
Quando localizo o registro "Kierra"
E clico no botão de edição
E altero o campo Age para "40"
E clico em Submit
Então o registro deve ser atualizado

#### Cenário 3: Deletar Registro
Dado que estou na página de Web Tables
Quando localizo o registro "Kierra"
E clico no botão de deletar
Então o registro não deve mais aparecer na tabela

## 2. Progress Bar

### Feature: Controle de Barra de Progresso

#### Cenário 1: Iniciar e Parar Progresso
Dado que estou na página de Progress Bar
Quando clico no botão Start
E espero o progresso atingir 25%
E clico no botão Stop
Então a barra de progresso deve parar antes de 25%

#### Cenário 2: Completar e Resetar Progresso
Dado que estou na página de Progress Bar
Quando clico no botão Start
E espero o progresso atingir 100%
E clico no botão Reset
Então a barra de progresso deve retornar a 0%

## 3. Sortable

### Feature: Ordenação de Lista

#### Cenário 1: Ordenar Lista em Ordem Crescente
Dado que estou na página de Sortable
Quando seleciono a aba List
E reorganizo os itens em ordem crescente usando drag and drop
Então a lista deve estar ordenada de "One" até "Six"

## 4. Browser Windows

### Feature: Manipulação de Janelas do Navegador

#### Cenário 1: Abrir Nova Aba
Dado que estou na página de Browser Windows
Quando clico no botão "New Tab"
Então uma nova aba deve ser aberta

## 5. Practice Form

### Feature: Preenchimento de Formulário

#### Cenário 1: Submeter Formulário com Dados Válidos
Dado que estou na página do Practice Form
Quando preencho todos os campos obrigatórios
E submeto o formulário
Então devo ver uma mensagem de confirmação