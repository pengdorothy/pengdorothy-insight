document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", function () {
      alert("📡 당신의 파동이 감지되었습니다. 정화 모드 시작합니다.");
    });
  }
});
