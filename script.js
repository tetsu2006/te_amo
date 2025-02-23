const startDate = new Date('2023-10-21');
const timerElement = document.getElementById('timer');
const achievementList = document.getElementById('achievement-list');

// Elementos do pop-up
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupIcon = document.getElementById('popup-icon');
const popupDate = document.getElementById('popup-date');
const popupMessage = document.getElementById('popup-message');
const popupClose = document.getElementById('popup-close');

// Atualizar Cronômetro
function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerElement.textContent = ` ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTimer, 1000);

// Lista de achievements e mensagens personalizadas
const totalAchievements = 50;
const achievements = [];

// Datas que já começam desbloqueadas
const unlockedDates = [
  '21/10/2023', '21/11/2023', '21/12/2023', '21/01/2024', '21/02/2024',
  '21/03/2024', '21/04/2024', '21/05/2024', '21/06/2024', '21/07/2024',
  '21/08/2024', '21/09/2024', '21/10/2024', '21/11/2024', '21/12/2024', '21/01/2025', '21/02/2025'
];

// Mensagens personalizadas para cada achievement
const achievementMessages = [
  "Iniciando a jornada juntos, com um novo capítulo a ser escrito.",
  "Capturando os momentos que definem a nossa história.",
  "O início de uma nova fase, selada com um sim eterno.",
  "Formalizando o compromisso de caminhar juntos pela vida.",
  "Subindo juntos, mais alto do que jamais imaginamos.",
  "Com você, sou rei e rainha do meu próprio destino.",
  "Palavras que expressam o que o coração não pode esconder.",
  "Relaxando juntos, aproveitando cada momento de tranquilidade.",
  "Cada gesto é um presente de carinho e atenção.",
  "Unidos para sempre, com a promessa de amor eterno.",
  "Reservando um lugar especial para nós dois, em qualquer lugar.",
  "Brindando ao amor, à amizade e ao futuro que estamos construindo.",
  "Comemorar cada dia juntos, com amor e doçura.",
  "A fragrância do amor se espalha a cada beijo.",
  "A união das nossas almas, além de todas as diferenças.",
  "Onde nossos votos se tornarão sagrados e eternos.",
  "O amor, que nos encontrou e nos fez inseparáveis.",
  "Iluminando o caminho do nosso amor, com o brilho de um coração fiel.",
  "O grande dia, e com ele, a promessa de um futuro juntos.",
  "O vestido que selará nossa união, representando a beleza do compromisso.",
  "Flutuando juntos, celebrando cada momento com leveza e alegria.",
  "Preparando-nos para novas aventuras, sempre lado a lado.",
  "O vínculo que não pode ser quebrado, fechado com amor e confiança.",
  "Juntos, em cada descanso e sonho, compartilhando a paz do nosso lar.",
  "Sob este arco, trocamos promessas que atravessarão o tempo.",
  "Onde a nossa história de amor encontra novas páginas todos os dias.",
  "A trilha sonora do nosso amor, tocando em nossos corações.",
  "Juntos, seguimos rumo ao desconhecido, com você ao meu lado.",
  "Calculando o valor de cada momento juntos, sempre investindo no nosso amor.",
  "Recordações de um dia que ficará marcado para sempre em nossos corações.",
  "Cada dia ao seu lado é uma data a ser celebrada.",
  "A fragrância do amor que permanece no ar, onde quer que vamos.",
  "Registrando cada sorriso, cada conquista, para reviver sempre.",
  "Assistindo ao nosso amor crescer, como o melhor show da vida.",
  "A porta que sempre se abre para nós, quando a vida nos chama.",
  "Detalhes que brilham e complementam a beleza do nosso amor.",
  "Celebrando nossa união com a intensidade de um céu iluminado.",
  "Carregando o amor em cada passo que damos juntos.",
  "A chave do meu coração, para sempre sua.",
  "Cantando juntos, nossa música de amor ecoa no mundo.",
  "Refletindo a beleza do nosso amor, que só cresce com o tempo.",
  "Um símbolo que carrego comigo, representando você em todos os momentos.",
  "Prontos para explorar o mundo, juntos, aonde quer que a vida nos leve.",
  "Com fé, construímos uma base sólida para o nosso amor.",
  "A melodia do nosso amor, tocada com delicadeza e harmonia.",
  "O som do nosso amor, chamando-nos para um novo começo.",
  "A vida é um banquete, e juntos, sempre teremos o melhor prato.",
  "Rumo ao nosso destino, com você como minha direção.",
  "Promessa eterna de amor, gravada em cada curva deste anel.",
  "Celebrando o tempo, como o vinho, que se aprimora com o passar dos anos."
];

// Gerar achievements com mensagens personalizadas
for (let i = 0; i < totalAchievements; i++) {
  const achievementDate = new Date(startDate.getFullYear(), startDate.getMonth() + i, 21);
  const formattedDate = achievementDate.toLocaleDateString('pt-BR');
  
  // Mensagens personalizadas por data
  let customMessage = achievementMessages[i] || ` Mensagem personalizada para o achievement de ${formattedDate}.`;

  achievements.push({
    id: i,
    unlocked: localStorage.getItem(`achievement_${i}_unlocked`) === 'true2' || unlockedDates.includes(formattedDate), // Verifica no localStorage ou se já é uma data desbloqueada
    date: achievementDate,
    icon: unlockedDates.includes(formattedDate) ? `${i + 1}.png` : localStorage.getItem(`achievement_${i}_unlocked`) === `true2` ? `${i + 1}.png` :  'question.png', // Define o ícone do achievement
    name: `${formattedDate}`,
    message: customMessage
  });
}

// Renderizar achievements
function renderAchievements() {
  achievementList.innerHTML = ''; // Limpa a lista de achievements
  achievements.forEach((ach) => {
    const div = document.createElement('div');
    div.classList.add('achievement');
    if (!ach.unlocked) div.classList.add('locked');

    const img = document.createElement('img');
    img.src = ach.icon; // Ícone do achievement

    const span = document.createElement('span');
    span.textContent = ach.unlocked ? ach.name : 'Locked';

    div.appendChild(img);
    div.appendChild(span);
    achievementList.appendChild(div);

    // Adicionar evento ao achievement
    div.addEventListener('click', () => {
      openPopup(ach);
    });
  });
}

// Função para abrir o pop-up
function openPopup(achievement) {
  popupTitle.textContent = achievement.name;
  popupIcon.src = achievement.icon;
  popupDate.textContent = achievement.unlocked
    ? ` Desbloqueado em: ${achievement.date.toLocaleDateString('pt-BR')}`
    : ` Achievement disponível em: ${achievement.date.toLocaleDateString('pt-BR')}`;
  popupMessage.textContent = achievement.unlocked
    ? achievement.message
    : "Este achievement ainda está bloqueado. Continue acompanhando!";

  popup.classList.remove('hidden');
}

// Função para desbloquear achievement
function verificarDia() {
  const hoje = new Date();
  const achievement = achievements.find(
    (ach) => ach.date.toLocaleDateString('pt-BR') === hoje.toLocaleDateString('pt-BR')
  );

  if (achievement) {
    if (!achievement.unlocked) {
      achievement.unlocked = true;
      achievement.icon = `${achievement.id + 1}.png`;

      // Salva o estado no localStorage
      localStorage.setItem(`achievement_${achievement.id}_unlocked`, `true2`);
      localStorage.setItem(`achievement_${achievement.id}_icon`, achievement.icon);

      renderAchievements(); // Atualiza a lista de achievements
      popupTitle.textContent = "Parabéns!";
      popupIcon.src = achievement.icon;
      popupDate.textContent = ` Achievement desbloqueado: ${achievement.date.toLocaleDateString('pt-BR')}`;
      popupMessage.textContent = achievement.message;
    } else {
      popupTitle.textContent = "Já resgatado!";
      popupIcon.src = "info-icon.png";
      popupDate.textContent = ` Achievement do dia ${achievement.date.toLocaleDateString('pt-BR')}`;
      popupMessage.textContent = "Este achievement já foi desbloqueado. Continue acompanhando!";
    }
  } else {
    popupTitle.textContent = "Aguarde";
    popupIcon.src = "wait-icon.png";
    popupDate.textContent = ` Hoje é ${hoje.toLocaleDateString('pt-BR')}`;
    popupMessage.textContent = "Você só pode resgatar achievements na data correspondente. Volte depois!";
  }

  popup.classList.remove('hidden');
}

// Adicionar evento ao botão
const resgatarAchievementButton = document.getElementById('resgatar-achievement');
resgatarAchievementButton.addEventListener('click', verificarDia);

// Evento para fechar o pop-up
popupClose.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Inicializar a lista de achievements
document.addEventListener('DOMContentLoaded', renderAchievements);
