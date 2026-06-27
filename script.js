// DOM 요소 캐싱
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('login-form');

const errorModal = document.getElementById('error-modal');
const errorMessage = document.getElementById('error-message');

// 몬스터 상태
let monsterHP = 100;
const maxMonsterHP = 100;
let score = 0;

// DOM 업데이트 함수들
function updateUI() {
  document.getElementById('monster-hp').textContent = Math.max(0, monsterHP);
  document.getElementById('score').textContent = score.toLocaleString();
}

function resetGame() {
  monsterHP = maxMonsterHP;
  score = 0;
  updateUI();
  showMessage("게임을 재시작했습니다.");
}

// 로그인 모달 관련 이벤트
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.onclick = (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
};

// 로그인 폼 제출 처리
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;

  // 예: 간단한 유효성 검사 (실제로는 서버 연동 필요)
  if (!email.includes('@')) {
    showError("유효한 이메일 주소를 입력해주세요.");
    return;
  }

  // 모의 로그인 성공
  loginModal.style.display = 'none';
  showMessage(`환영합니다, ${email}님! 게임을 즐기세요.`);
});

// 공격 버튼 클릭 처리
document.getElementById('attack-btn').addEventListener('click', () => {
  // 랜덤 데미지 (5~10)
  const damage = Math.floor(Math.random() * 6) + 5;

  monsterHP -= damage;

  if (monsterHP <= 0) {
    monsterHP = maxMonsterHP; // 리셋
    score += 20;

    // 몬스터 효과음 대체: 브라우저 알림/시각 효과
    const btn = document.getElementById('attack-btn');
    btn.style.backgroundColor = '#81c784';
    setTimeout(() => {
      btn.style.backgroundColor = '';
    }, 200);

    showMessage("몬스터가 사망했습니다! +20점 획득!");
  }

  updateUI();
});

// 에러 모달 관리
function showError(msg) {
  errorMessage.textContent = msg;
  errorModal.style.display = 'block';
}

window.closeErrorModal = function () {
  errorModal.style.display = 'none';
};

// 간단한 메시지 표시 (toast-like)
function showMessage(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = msg;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.padding = '10px 20px';
  toast.style.background = '#66bb6a';
  toast.style.color = '#fff';
  toast.style.borderRadius = '8px';
  toast.style.zIndex = '1000';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => toast.remove(), 500);
  }, 2000);
}

// 초기화
updateUI();
