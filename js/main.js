const userArea = document.getElementById("userArea");
const nickname = localStorage.getItem("nickname");

if (nickname) {
  // 로그인된 경우 닉네임 + 로그아웃 버튼 표시
  const welcomeText = document.createElement("span");
  welcomeText.textContent = `${nickname}님 환영합니다!`;

  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "로그아웃";
  logoutBtn.onclick = () => {
    localStorage.removeItem("nickname");
    alert("로그아웃 되었습니다.");
    location.reload(); // 페이지 새로고침으로 UI 업데이트
  };

  userArea.appendChild(welcomeText);
  userArea.appendChild(logoutBtn);
} else {
  // 로그인되지 않은 경우 버튼 표시
  const loginBtn = document.createElement("button");
  loginBtn.textContent = "로그인";
  loginBtn.onclick = () => location.href = "login.html";

  const signupBtn = document.createElement("button");
  signupBtn.textContent = "회원가입";
  signupBtn.onclick = () => location.href = "signup.html";

  userArea.appendChild(loginBtn);
  userArea.appendChild(signupBtn);
}
