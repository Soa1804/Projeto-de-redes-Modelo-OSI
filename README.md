# 🌐 Projeto de Redes - Simulação do Modelo OSI

## 📖 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de demonstrar o funcionamento das camadas do **Modelo OSI**, com foco na:

* Camada de Aplicação
* Camada de Apresentação

A aplicação simula diferentes tipos de comunicação em rede, identificando protocolos utilizados no envio de mensagens, requisições web e transferência de arquivos.

Além disso, os dados gerados na Camada de Aplicação são processados pela Camada de Apresentação antes de serem transmitidos para as próximas camadas do modelo.

---

## 🎯 Objetivos

* Demonstrar conceitos do Modelo OSI.
* Simular protocolos da Camada de Aplicação.
* Representar o fluxo de dados entre camadas.
* Exibir informações processadas antes da transmissão.
* Aplicar conceitos de encapsulamento de dados.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* LocalStorage
* Web APIs do Navegador

---

## 📂 Estrutura do Projeto

```text
Projeto-OSI/
│
├── index.html
├── resultado.html
│
├── style.css
│
├── scripts/
│   ├── application.js
│   ├── apresentacao.js
│   └── resultado.js
│
└── imagem/
    └── modelo-osi.png
```

---

## 🚀 Funcionalidades

### 📧 SMTP (E-mail)

Simula o envio de e-mails contendo:

* Remetente
* Destinatário
* Assunto
* Corpo da mensagem
* Protocolo utilizado
* Timestamp

Exemplo:

```text
usuario@email.com
```

---

### 💬 WebSocket (Chat)

Simula uma comunicação em tempo real utilizando WebSocket.

Dados transmitidos:

* Usuário
* Destinatário
* Mensagem
* Protocolo
* Timestamp

Exemplo:

```text
ws://chat
```

---

### 🌍 HTTP / HTTPS

Simula uma requisição para um servidor web.

Dados transmitidos:

* Método HTTP
* Host
* Usuário
* Protocolo
* Timestamp

Exemplo:

```text
https://www.google.com
```

---

### 📁 Transferência de Arquivos

Simula o envio de arquivos pela rede.

Dados transmitidos:

* Nome do arquivo
* Formato
* Remetente
* Protocolo
* Timestamp

Exemplo:

```text
documento.pdf
```

---

## 🔄 Fluxo de Funcionamento

```text
Usuário
   │
   ▼
Camada de Aplicação
   │
   ▼
Camada de Apresentação
   │
   ▼
Dados Processados
   │
   ▼
Tela de Resultado
```

---

## 📋 Simulação dos Protocolos

| Entrada                                       | Protocolo Detectado       |
| --------------------------------------------- | ------------------------- |
| [usuario@email.com](mailto:usuario@email.com) | SMTP/POP                  |
| ws://chat                                     | WebSocket                 |
| [https://site.com](https://site.com)          | HTTP/HTTPS                |
| documento.pdf                                 | Transferência de Arquivos |

---

## 📸 Telas do Sistema

### Tela Principal

* Identificação do usuário
* Verificação de protocolos
* Simulação de envio
* Upload de arquivos

### Tela de Resultado

Exibe:

* Dados processados
* Informações da transmissão
* Dados da aplicação

---

## 🎓 Aplicação Acadêmica

Projeto desenvolvido para a disciplina de **Redes de Computadores**, com o objetivo de demonstrar de forma prática o funcionamento das camadas do **Modelo OSI** e dos principais protocolos utilizados na comunicação em redes.

---

## 👨‍💻 Autor

**David Soares da Silva**

GitHub:
https://github.com/Soa1804

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.

---
