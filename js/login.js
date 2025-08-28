document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("loginId").value;
  const pw = document.getElementById("loginPw").value;

  // 예시: 로그인 성공 시 닉네임 저장
  if (id && pw) {
    localStorage.setItem("nickname", "홍길동"); // 실제 닉네임은 서버에서 받아야 함
    alert("로그인 성공!");
    location.href = "main.html";
  } else {
    alert("아이디와 비밀번호를 입력해주세요.");
  }
});

