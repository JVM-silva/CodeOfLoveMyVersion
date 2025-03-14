var btn = document.querySelector(".no");
var position = 0;
var isAnimating = false;

// Animação do botão "Não"
btn.addEventListener("click", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

// Animação ao passar o mouse sobre o botão "Não"
btn.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

// Lógica do botão "Sim"
const sim = document.getElementById('yes');
const video = document.getElementById('bg-video'); // Referência para o vídeo

sim.addEventListener("click", () => {
  // Ativar o som do vídeo
  video.muted = false; // Isso desativa o "muted" e ativa o som

  let timerInterval;
  
  // Exibe o SweetAlert2
  Swal.fire({
    title: 'Obrigado 😍',
    html: 'Prometo lhe fazer feliz. 💘',
    timer: 2500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector('b');
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('Fechado pelo timer');
    }
  });
});
const unmuteButton = document.getElementById('unmute');
const videoElement = document.getElementById('bg-video');

// Função para alternar som
unmuteButton.addEventListener('click', () => {
  if (videoElement.muted) {
    videoElement.muted = false; // Ativar som
    unmuteButton.textContent = "Desativar som"; // Mudar o texto do botão
  } else {
    videoElement.muted = true; // Desativar som
    unmuteButton.textContent = "Ativar som"; // Mudar o texto do botão
  }
});
