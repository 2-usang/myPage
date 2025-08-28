// 비밀번호 보기/숨기기
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// 핸드폰 번호 자동 하이픈
document.getElementById("phone").addEventListener("input", function () {
  let value = this.value.replace(/\D/g, "");
  if (value.length < 4) {
    this.value = value;
  } else if (value.length < 8) {
    this.value = value.slice(0, 3) + "-" + value.slice(3);
  } else {
    this.value = value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7, 11);
  }
});

// 카카오 주소 검색
function searchPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      document.getElementById("postcode").value = data.zonecode;
      document.getElementById("address").value = data.address;
      document.getElementById("detailAddress").focus();
    }
  }).open();
}

// 전체 동의 체크박스
const agreeAll = document.getElementById("agreeAll");
const terms = document.querySelectorAll(".term");

agreeAll.addEventListener("change", () => {
  terms.forEach(cb => cb.checked = agreeAll.checked);
});

// 닉네임 중복확인 (예시)
document.getElementById("checkNickname").addEventListener("click", () => {
  const nickname = document.getElementById("nickname").value;
  if (!nickname) {
    alert("닉네임을 입력해주세요.");
    return;
  }
  // 실제 중복 확인은 서버와 연동 필요
  alert(`닉네임 "${nickname}"은 사용 가능합니다.`);
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const requiredTerms = document.querySelectorAll(".term.required");
  const allRequiredAgreed = Array.from(requiredTerms).every(cb => cb.checked);

  if (!allRequiredAgreed) {
    alert("필수 약관에 모두 동의해주세요.");
    return;
  }

  const pw = document.getElementById("password").value;
  const confirmPw = document.getElementById("confirmPassword").value;

  // 비밀번호 유효성 검사: 영문+숫자+특수문자 포함, 8자 이상
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (!pwRegex.test(pw)) {
    alert("비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.");
    return;
  }

  if (pw !== confirmPw) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }


  alert("회원가입이 완료되었습니다!");
  location.href = "login.html"; // ✅ 로그인 페이지로 이동
});

