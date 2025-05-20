let current = 1;
let scores = {
  pineapple: 0,
  sanSan: 0,
  luna: 0
};

function answer(cat) {
  scores[cat]++;
  document.getElementById(`q${current}`).style.display = "none";
  current++;

  if (current <= 3) {
    document.getElementById(`q${current}`).style.display = "block";
  } else {
    showResult();
  }
}

function showResult() {
  let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  const catInfo = {
    pineapple: {
      name: "Pineapple (INFP)",
      img: "images/07.jpg",
      desc: "You're a gentle and thoughtful soul, just like Pineapple! You love cozy moments, deep thoughts, and meaningful connections."
    },
    sanSan: {
      name: "San San (ESTP)",
      img: "images/16.jpg",
      desc: "You're adventurous, bold, and always on the move — just like San San! You bring excitement and energy wherever you go."
    },
    luna: {
      name: "Luna (INFJ)",
      img: "images/41.jpg",
      desc: "You're mysterious, dreamy, and deeply intuitive — Luna is your spirit twin. You value quiet beauty and soulful connections."
    }
  };

  const result = catInfo[winner];

  document.getElementById("result-text").innerText = `You're most like: ${result.name}`;
  const resultImg = document.getElementById("result-img");
  resultImg.src = result.img;
  resultImg.alt = result.name;
  resultImg.style.display = "block";
  document.getElementById("result-desc").innerText = result.desc;
}

