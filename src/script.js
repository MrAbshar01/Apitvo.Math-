/* ================= PAGE NAVIGATION ================= */

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.toggle('active', page.id === pageId);
  });

  document.querySelectorAll('nav .nav-item[data-page]').forEach(function(button) {
    button.classList.toggle('active', button.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('nav .nav-item[data-page]').forEach(function(button) {
  button.addEventListener('click', function() {
    showPage(button.dataset.page);
    // Close mobile drawer if open
    closeMobileDrawer();
  });
});

document.querySelectorAll('[data-go]').forEach(function(button) {
  button.addEventListener('click', function() {
    showPage(button.dataset.go);
    closeMobileDrawer();
  });
});


/* ================= SIDEBAR & NAVIGATION TOGGLE ================= */

const appLayout = document.querySelector('.app-layout');
const appNav = document.querySelector('.app-nav');
const sidebarToggle = document.getElementById('sidebarToggle');
const menuToggle = document.getElementById('menuToggle');
const navBackdrop = document.getElementById('navBackdrop');

function toggleSidebar() {
  const width = window.innerWidth;

  if (width >= 1200) {
    // Desktop: toggle collapsed rail vs full sidebar
    const isCollapsed = appLayout.classList.toggle('sidebar-collapsed');
    try {
      localStorage.setItem('aptivo_sidebar_collapsed', isCollapsed ? '1' : '0');
    } catch (e) {}

    if (sidebarToggle) {
      const label = isCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
      sidebarToggle.setAttribute('aria-label', label);
      sidebarToggle.setAttribute('title', label);
    }
  } else if (width >= 768) {
    // Tablet: toggle rail vs expanded sidebar
    const isExpanded = appLayout.classList.toggle('sidebar-expanded');
    if (sidebarToggle) {
      const label = isExpanded ? 'Collapse to rail' : 'Expand sidebar';
      sidebarToggle.setAttribute('aria-label', label);
      sidebarToggle.setAttribute('title', label);
    }
  } else {
    // Mobile: toggle drawer overlay
    const isOpen = appNav.classList.toggle('drawer-open');
    if (navBackdrop) {
      navBackdrop.classList.toggle('active', isOpen);
    }
  }
}

function closeMobileDrawer() {
  if (appNav && appNav.classList.contains('drawer-open')) {
    appNav.classList.remove('drawer-open');
  }
  if (navBackdrop && navBackdrop.classList.contains('active')) {
    navBackdrop.classList.remove('active');
  }
}

// Restore desktop collapsed preference
try {
  if (window.innerWidth >= 1200 && localStorage.getItem('aptivo_sidebar_collapsed') === '1') {
    appLayout.classList.add('sidebar-collapsed');
    if (sidebarToggle) {
      sidebarToggle.setAttribute('aria-label', 'Expand sidebar');
      sidebarToggle.setAttribute('title', 'Expand sidebar');
    }
  }
} catch (e) {}

if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
if (navBackdrop) navBackdrop.addEventListener('click', closeMobileDrawer);


/* ================= USER NAME & GREETING SYNC ================= */

const userNameInput = document.getElementById('userNameInput');
const topbarGreeting = document.getElementById('topbarGreeting');

function updateGreeting(name) {
  const trimmed = (name || '').trim();
  if (topbarGreeting) {
    topbarGreeting.textContent = trimmed
      ? `Hello ${trimmed}! What are you learning today?`
      : 'Hello! What are you learning today?';
  }
}

if (userNameInput) {
  try {
    const savedName = localStorage.getItem('aptivo_user_name');
    if (savedName !== null) {
      userNameInput.value = savedName;
    }
  } catch (e) {}

  updateGreeting(userNameInput.value);

  userNameInput.addEventListener('input', function() {
    const val = userNameInput.value;
    updateGreeting(val);
    try {
      localStorage.setItem('aptivo_user_name', val.trim());
    } catch (e) {}
  });
}


/* ================= INTERACTIVE MONEY LAB ================= */

const amountA = document.getElementById('amountA');
const amountB = document.getElementById('amountB');

function money(value) {
  return 'RM' + Number(value).toLocaleString('en-MY');
}

function updateLab() {
  const a = Number(amountA.value);
  const b = Number(amountB.value);
  const sum = a + b;

  document.getElementById('labelA').textContent = money(a);
  document.getElementById('labelB').textContent = money(b);
  document.getElementById('total').textContent = money(sum);

  document.getElementById('equation').textContent =
    money(a) + ' + ' + money(b) + ' = ' + money(sum);

  document.getElementById('limitNote').textContent =
    sum <= 10000
      ? 'Great exploring! The total is within RM10,000.'
      : 'Your total is above RM10,000. Try lowering an amount.';
}

if (amountA && amountB) {
  amountA.addEventListener('input', updateLab);
  amountB.addEventListener('input', updateLab);
}

const resetLabBtn = document.getElementById('resetLab');
if (resetLabBtn) {
  resetLabBtn.addEventListener('click', function() {
    amountA.value = 1250;
    amountB.value = 2375;
    updateLab();
  });
}


/* ================= TREASURE HUNT ================= */

const missionAnswers = {
  1: '3625',
  2: '3750',
  3: '7225'
};

const missionDone = {
  1: false,
  2: false,
  3: false
};

function checkMoneyMission(number, answer) {
  const feedback = document.getElementById('missionFeedback' + number);
  const correct = answer === missionAnswers[number];

  if (correct) {
    missionDone[number] = true;
    feedback.textContent = 'Correct! You unlocked this challenge.';
    feedback.className = 'feedback show correct';
  } else {
    missionDone[number] = false;
    feedback.textContent = 'Not quite. Try calculating the amounts again.';
    feedback.className = 'feedback show incorrect';
  }

  const score = Object.values(missionDone).filter(Boolean).length;
  document.getElementById('missionScore').textContent = score + '/3';
  document.getElementById('missionResult').textContent =
    score === 3
      ? 'Congratulations! You are a certified Money Master!'
      : 'Keep going! Complete all three challenges to collect your badge.';
}

function resetMoneyMission() {
  [1, 2, 3].forEach(function(number) {
    missionDone[number] = false;
    const feedback = document.getElementById('missionFeedback' + number);
    if (feedback) {
      feedback.textContent = '';
      feedback.className = 'feedback';
    }
  });

  const missionScore = document.getElementById('missionScore');
  if (missionScore) {
    missionScore.textContent = '0/3';
  }

  const missionResult = document.getElementById('missionResult');
  if (missionResult) {
    missionResult.textContent = 'Complete all three challenges to collect your badge!';
  }
}
