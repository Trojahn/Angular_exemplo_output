# Angular - Exemplo de @Output() para compunicação entre componentes
Este é um gerado pelo [Angular CLI](https://github.com/angular/angular-cli) versão 11.2.6.

## Objetivo 

Este é um pequeno projeto didático criado para exemplificar a comunicação entre componentes usando as diretivas @Input() e @Output, usando como pano-de-fundo um simulacro de um website onde realiza-se login/logout

## Detalhes

O projeto foi desenvolvido usando a biblioteca [Bulma CSS](https://bulma.io/) para a estilização. Nenhum dos recursos das manipulações dos elementos está diretamente vinculado ao Bulma CSS, ou seja, você pode utilizar os conceitos aqui mostrados em qualquer projeto Angular.

O projeto consiste de três componentes base, o `app`, o `formulario` e `header`. Ao iniciar a página, o usuário se depara com uma página onde há uma opção no componente `header` de realizar o Login. Ao clicar no botão correspondente no dito componente, uma mensagem é enviada para o componente `app` para que exiba o componente `formulario`, com um simulacro de um formulário para digitar os campos de login e senha.

Quando o formulário é enviado (ao clicar no botão em `formulario` para **Logar**), o dito componente envia uma mensagem ao componente `app` para realizar o login junto, também, do nome do usuário (fixo nesta versão).


## Como rodar?

Entre na pasta do projeto e execute `ng serve` para acessar. Não se esqueça de usar o navegador para ir no endereço que aparecer na tela (em geral: http://localhost:4200)