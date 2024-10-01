# Previsão do Tempo com JavaScript, HTML e CSS

Este projeto é uma aplicação web que permite visualizar a previsão do tempo para a localização atual do usuário, além de fornecer previsões para os próximos cinco dias. Foi desenvolvido usando HTML, CSS e JavaScript, focando em ser acessível para iniciantes no desenvolvimento web.

<img src="https://agoravocesabe.com/scripts-randerson/previsao.png" alt="ScrenCapture">

## Funcionalidades

- **Detecção Automática da Localização do Usuário:** A aplicação usa uma API de geolocalização para automaticamente detectar a localização atual do usuário.
- **Exibição do Clima Atual e Previsão para Cinco Dias:** Mostra as condições meteorológicas atuais e também oferece uma previsão detalhada para os próximos cinco dias.
- **Interface Responsiva:** Projetada para funcionar bem em dispositivos móveis e desktops, permitindo que o usuário verifique as condições meteorológicas em qualquer dispositivo.
- **Alterações Visuais Dinâmicas:** A interface muda de cor e ícones de acordo com a temperatura atual, proporcionando uma experiência visual intuitiva.

## Tecnologias Utilizadas

Este projeto foi construído utilizando:
- **HTML5** - Para a estrutura da página.
- **CSS3** - Para estilização.
- **JavaScript** - Para funcionalidades interativas e chamadas a APIs.

## Para este projeto, vamos utilizar duas APIs principais:

**GeoJS:** Esta é uma API de geolocalização que nos ajuda a determinar a localização do usuário com base no seu endereço IP. Com ela, podemos obter informações como cidade, país e coordenadas geográficas sem que o usuário precise informá-las.

**Open-Meteo:** Esta API nos fornece informações meteorológicas detalhadas com base nas coordenadas obtidas da API de geolocalização. Ela nos dá acesso a dados como temperatura atual, velocidade do vento e previsões diárias de temperaturas máximas e mínimas.

## Funcionalidade Dinâmica

Um aspecto interessante desse projeto é a capacidade de alterar dinamicamente a interface com base nos dados recebidos. Por exemplo, se a temperatura estiver abaixo de 10°C, o fundo da página terá um gradiente de tons frios. Se o usuário clicar para ver mais informações, o texto do botão muda de "Mais informações" para "Menos informações", e vice-versa, usando uma transição suave.

## Contribuições

Contribuições são bem-vindas! Se você tem melhorias ou correções, sinta-se à vontade para forkar o repositório e enviar um pull request com suas modificações.

Esperamos que você encontre esta aplicação útil e fácil de entender, especialmente se você está começando a explorar o desenvolvimento web!


