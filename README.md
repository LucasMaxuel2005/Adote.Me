# Adote.me

## Contextualização

O Adote.me é um aplicativo móvel desenvolvido em React Native com Expo, destinado a facilitar a adoção de animais de estimação. O objetivo principal é conectar pessoas interessadas em adotar animais com aqueles disponíveis para adoção, promovendo a responsabilidade e o cuidado com os pets. O app resolve o problema de falta de visibilidade e acessibilidade para adoções, permitindo que usuários visualizem animais disponíveis, façam login para acessar funcionalidades avançadas como adoção e reserva, e gerenciem suas contas.

## Como Rodar

### Pré-requisitos
- Node.js instalado (versão 14 ou superior).
- Expo CLI instalado globalmente: `npm install -g @expo/cli`.
- Um dispositivo móvel ou emulador para testar o app.

### Instruções Passo a Passo
1. Clone o repositório ou navegue até o diretório do projeto: `cd c:/Users/lpmc2/Documents/Projetos/unimaps/app2`.
2. Instale as dependências: `npm install`.
3. Inicie o servidor Expo: `npm start` ou `expo start`.
4. Escaneie o QR code com o app Expo Go no seu dispositivo móvel, ou execute no emulador/simulador.
   - Para Android: `npm run android`.
   - Para iOS: `npm run ios`.
   - Para web: `npm run web`.

## Como Utilizar

### Navegação Principal
- **Tela Inicial (Home)**: Tela de abertura do aplicativo, onde exibe a logo do app e botões para "Conferir Animais" (leva à lista sem login) e "Login":
  
<img width="367" height="832" alt="Image" src="https://github.com/user-attachments/assets/e3e9b80e-6b02-4e4e-a50d-436c75328f77" />


- **Lista de Animais (AnimalList)**: Ao clicar em conferir Animais na tela anterior, aparece a lista de animais que estão disponíveis para adoção em diversas casas de adoção que possúem parceria com o app:

  
<img width="368" height="827" alt="Image" src="https://github.com/user-attachments/assets/12b75923-c366-4daa-9566-73ff96603d39" />


- **Login**: Use email 'aluno@univag.com' e senha '123456' para logar como usuário de exemplo, pois não é possível prosseguir para a adoção caso não tenha efetuado o login. Após inserir os dados, o usuário é redirecionado para a Lista de animais Logado em se usuário:

  
<img width="361" height="835" alt="Image" src="https://github.com/user-attachments/assets/4cc60374-3a8c-4710-8648-054bed2311b1" />

<img width="362" height="829" alt="Image" src="https://github.com/user-attachments/assets/17589f1a-231c-42f9-a159-96e44d4207d7" />


- **Adoção (AdoptionScreen)**: Tela onde mostra os Dados do animal que foi selecionado, com Dados importantes do Animal:


<img width="369" height="838" alt="Image" src="https://github.com/user-attachments/assets/1fa69806-45d9-45f5-9205-124e5bd637df" />


-**Reserva (ReservationScreen)**: Após clicar em solicitar reserva, somos redirecionados para a tela de Reserva, onde o usuário insere seus Dados para que possamos repassar para a casa de adoção responsável pelo animal:


<img width="371" height="830" alt="Image" src="https://github.com/user-attachments/assets/5b36258b-9f87-43a6-b103-9f8fa202c50e" />

<img width="366" height="834" alt="Image" src="https://github.com/user-attachments/assets/8ea87f9e-7530-41a5-a03d-a1f9589e5329" /> 

<img width="374" height="835" alt="Image" src="https://github.com/user-attachments/assets/2ca0246e-4239-4807-87b5-01719fc20d2b" />


- **Conta (AccountScreen)**: Também é possível visualizar os seus dados cadastrados no App na tela de Dados do usuário. Após efetuar o login, um botão aparece no canto inferior direito na tela de Lista de animais que da acesso a esta tela.


<img width="368" height="832" alt="Image" src="https://github.com/user-attachments/assets/2abebef6-872c-4da3-ad4c-6de01b944864" />


### Funcionalidades Principais
- **Visualizar Animais**: Na tela AnimalList, veja detalhes como nome, espécie, idade e descrição.
- **Adotar**: Clique em "Adotar" em um animal; confirme na tela de adoção. O animal fica indisponível.
- **Reservar**: Clique em "Reservar"; preencha o formulário na tela de reserva.
- **Gerenciar Conta**: Após login, acesse a conta para ver dados pessoais.






