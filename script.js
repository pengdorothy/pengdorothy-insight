document.getElementById("sajuForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const birth = document.getElementById("birth").value;
  const birthTime = document.getElementById("birthTime").value;
  const worry1 = document.getElementById("worry1").value;
  const worry2 = document.getElementById("worry2").value;

  let result = `<h2>🔮 ${name}님의 사주 파동 분석</h2>`;
  result += `<p>성별: ${gender}</p>`;
  result += `<p>생년월일: ${birth}</p>`;
  result += `<p>태어난 시간: ${birthTime}</p>`;
  result += `<p>고민 1: ${worry1}</p>`;
  result += `<p>고민 2: ${worry2}</p>`;
  result += `<hr>`;
  result += `<p>🧠 도로시의 통찰: 내면의 파동이 강하게 요동치는 시기입니다. 작은 결정이 큰 변화를 부를 수 있어요.</p>`;
  result += `<p>🐱 야옹이의 조언: 마음속 진심에 귀 기울이면 길이 보일 거예요.</p>`;
  result += `<p>🐧 펭귄의 속삭임: 차가운 현실에서도 따뜻한 방향을 찾을 수 있어요.</p>`;

  document.getElementById("result").innerHTML = result;
});
