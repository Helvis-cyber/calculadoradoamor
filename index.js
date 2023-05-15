document.getElementById("calcular-btn").addEventListener("click", function () {
  var nome = document.getElementById("nome").value;
  var amor = document.getElementById("amor").value;

  var scoreDoAmor = Math.random() * 100;
  scoreDoAmor = Math.floor(scoreDoAmor) + 1;

  if (scoreDoAmor >= 90) {
    alert(
      scoreDoAmor +
        "%" +
        " É muito amor envolvido, praticamente Thais Araujo e Lazaro Ramos"
    );
  } else if (scoreDoAmor > 50 && scoreDoAmor >= 70) {
    alert(scoreDoAmor + "%" + " É complicado, mas vocês podem fazer dar certo");
  } else {
    alert(scoreDoAmor + "%" + " Praticamente água e óleo T_T");
  }
});
