'use strict';

const config = window.USGROW_CONFIG;
const email = config.contactEmail;
const mailto = `mailto:${email}?subject=${encodeURIComponent(config.contactSubject)}`;
document.querySelectorAll('.email-link').forEach(link => { link.href = mailto; });
document.querySelectorAll('[data-contact-email]').forEach(node => { node.textContent = email; });
document.querySelector('#copyright-year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
  nav.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  nav.classList.toggle('open', isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!document.querySelector('.site-header').contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);

const captions = (title) => `<div class="visual-caption"><span class="status-dot"></span> ${title} <span>기능 구성 예시</span></div>`;
const solutions = {
  dlc: {
    category: 'AI DEVELOPMENT LIFECYCLE', index: '01 / 05',
    title: 'AI 개발에,<br>우리 팀의 기준을 더하다.',
    description: 'AI 개발 도구를 팀의 규칙과 승인 절차에 연결합니다. 명세부터 구현·테스트·운영까지, 검토할 결과와 인계할 자료를 명확히 합니다.',
    features: ['요구사항 템플릿과 코딩 규칙 적용', '명세·코드·테스트·인프라 코드 Git 연계', '검토·승인 이력과 운영 인계 자료 관리'],
    visual: captions('DEVELOPMENT WORKFLOW') + '<div class="workflow"><div><span>01</span><strong>요구사항</strong><small>명세 · 설계 기준</small></div><b aria-hidden="true">→</b><div><span>02</span><strong>구현·검증</strong><small>코드 · 테스트</small></div><b aria-hidden="true">→</b><div><span>03</span><strong>운영·인계</strong><small>배포 · 승인 이력</small></div></div><div class="visual-foot"><span>TEAM STANDARDS</span><span>GIT · REVIEW · HANDOVER</span></div>',
  },
  chatbot: {
    category: 'CONVERSATIONAL AI', index: '02 / 05',
    title: '대화가,<br>서비스의 실제 이용으로.',
    description: '사용자의 말과 대화의 맥락을 이해합니다. 근거를 찾는 검색과 검증된 기능 실행을 결합해 기존 웹·앱의 자료와 기능을 연결합니다.',
    features: ['자연어 검색·비교·부분 수정의 맥락 유지', 'RAG 기반 근거 검색과 구조화된 실행 요청', '고객 환경에 맞춘 인증·운영 DB·외부 API 연계'],
    visual: captions('SEARCH → COMPARE → ACTION') + '<div class="chat-example"><div class="chat-bubble user">이 두 자료를 비교해 주세요.</div><div class="chat-bubble answer">선택한 자료를 이어받아, 확인한 근거로 차이를 설명합니다.</div></div>',
  },
  km: {
    category: 'AI KNOWLEDGE MANAGEMENT', index: '03 / 05',
    title: '쌓인 자료를,<br>다시 쓰는 업무 지식으로.',
    description: '팀의 파일·링크·메모를 한곳에 모읍니다. 질문으로 관련 자료를 찾고 AI 대화에 연결해, 검토한 지식을 학습과 실제 업무에 다시 활용합니다.',
    features: ['벡터 검색과 키워드 검색을 함께 활용', '선택한 문서를 AI 대화와 학습에 연결', '검토·승인한 지식과 버전을 정한 업무 기준본 관리'],
    visual: captions('SEARCH YOUR KNOWLEDGE') + '<div class="knowledge-demo"><div class="search-demo"><span>출장비 정산에 필요한 자료 찾기</span><span aria-hidden="true">⌕</span></div><div class="knowledge-docs"><span><b>01 / 문서</b> 정산 안내</span><span><b>02 / 메모</b> 증빙 준비</span></div></div>',
  },
  lms: {
    category: 'LEARNING MANAGEMENT SYSTEM', index: '04 / 05',
    title: '교육의 시작부터,<br>배움의 결과까지 한곳에서.',
    description: '콘텐츠와 수강, 학습 활동과 평가를 하나의 시스템에서 관리합니다. 교육 담당자는 운영을 관리하고, 학습자는 웹·모바일로 수강합니다.',
    features: ['콘텐츠·과정·수강생·학습 활동 통합 관리', '온라인 시험·채점·진도·통계·관리자 리포트', 'SCORM·xAPI 지원 및 SSO·HR·ERP 연계'],
    visual: captions('CONNECTED LEARNING') + '<div class="lms-demo"><div><strong>콘텐츠·과정</strong><small>교육 자료 등록과 관리</small></div><div><strong>수강·학습</strong><small>강의 · 과제 · 토론</small></div><div><strong>시험·평가</strong><small>온라인 시험과 채점</small></div><div><strong>진도·리포트</strong><small>학습 현황과 결과 확인</small></div></div>',
  },
  telematics: {
    category: 'CONNECTED FLEET & EQUIPMENT', index: '05 / 05',
    title: '흩어진 현장을,<br>하나의 관제 화면으로.',
    description: '차량과 장비의 위치·상태·운행 정보를 연결합니다. 현장 데이터를 바탕으로 점검할 장비를 확인하고, 관리와 운영에 필요한 판단을 돕습니다.',
    features: ['GPS 위치·경로·정차·주행 기록 모니터링', '센서·연료·상태 수집 및 이상·정비 알림', '운영 리포트와 지원 장비·권한별 원격 제어'],
    visual: captions('CONNECTED OPERATIONS') + '<div class="map-demo" aria-hidden="true"><span class="map-node"></span><span class="map-node"></span><span class="map-node"></span><span class="map-label">위치 · 장비 상태 · 운행 정보</span></div>',
  },
};
const tabs = [...document.querySelectorAll('[data-solution]')];
const panel = document.querySelector('#solution-panel');
function selectSolution(tab, focusTab = false) {
  const key = tab.dataset.solution;
  const solution = solutions[key];
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tab.id);
  document.querySelector('#solution-category').textContent = solution.category;
  document.querySelector('#solution-index').textContent = solution.index;
  document.querySelector('#solution-title').innerHTML = solution.title;
  document.querySelector('#solution-description').textContent = solution.description;
  const visual = document.querySelector('#solution-visual');
  visual.innerHTML = solution.visual;
  visual.setAttribute('aria-label', `${tab.children[1].firstChild.textContent} 기능 구성 예시`);
  const features = document.querySelector('#solution-features');
  features.replaceChildren(...solution.features.map(feature => {
    const item = document.createElement('li');
    item.textContent = feature;
    return item;
  }));
  panel.querySelector('.email-link').href = `mailto:${email}?subject=${encodeURIComponent(`[UsGrow] ${tab.children[1].firstChild.textContent} 도입 문의`)}`;
  if (focusTab) {
    tab.focus({ preventScroll: true });
    if (window.innerWidth <= 600) tab.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
  }
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectSolution(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectSolution(tabs[next], true); }
  });
});
function setTabOrientation() {
  document.querySelector('.solution-tabs').setAttribute('aria-orientation', window.innerWidth <= 800 ? 'horizontal' : 'vertical');
}
setTabOrientation();
window.matchMedia('(max-width: 800px)').addEventListener('change', setTabOrientation);

const projects = {
  '2026': [
    ['KB국민은행', '채널계 차세대 사업(Front AA, ML-DL)', 'FINANCE'],
    ['SKHy', 'Cloud AI Transformation 통합 구축 / SM', 'AI PLATFORM'],
    ['SK매직', 'AI기반 Text2SQL 시스템 개선 / SM', 'AI SERVICE'],
    ['두산 밥캣', '텔레매틱스 2차 고도화', 'TELEMATICS'],
    ['LG전자', '해외구독사업 확산지원 SM', 'OPERATIONS'],
  ],
  '2025': [
    ['SK브로드밴드', 'AICC 구축 사업', 'AI CONTACT CENTER'],
    ['GS칼텍스', 'AI 전환 프로젝트', 'AI TRANSFORMATION'],
    ['키움증권', 'AICC 포털 고도화 / SM', 'FINANCE'],
    ['두산 밥캣', '텔레매틱스 1차 고도화', 'TELEMATICS'],
    ['천재교과서', '밀크T 차세대 시스템 PoC 개발', 'EDUCATION'],
  ],
  '2024': [
    ['미래에셋', '생성형 AI 플랫폼 시스템 개발', 'AI PLATFORM'],
    ['두산 밥캣', '텔레매틱스 PI 컨설팅 및 재구축 / SM', 'TELEMATICS'],
    ['GS칼텍스', '에너지플러스 앱(주유소 앱) 고도화 / SM', 'MOBILE SERVICE'],
    ['미래엔', '디지털 초코 교육 서비스 플랫폼 개발 / SM', 'EDUCATION'],
    ['SKE&S', '원가 최적화 시스템 구축', 'ENTERPRISE'],
  ],
  '2023': [
    ['SKB', 'AI 고객센터 챗봇 시스템 구축', 'AI CONTACT CENTER'],
    ['교통안전공단', '차세대 자동차관리 정보시스템 구축', 'PUBLIC SYSTEM'],
    ['SK렌터카', '시스템 차세대 구축(채널계 및 데이터 파트)', 'SYSTEM INTEGRATION'],
    ['웅진스마트올', '중학시스템 고도화', 'EDUCATION'],
    ['스마일게이트', '성장센터 고도화', 'ENTERPRISE'],
  ],
  '2022': [
    ['ADT캡스', '차세대 OSS 시스템 구축 / SM', 'SYSTEM INTEGRATION'],
    ['SKB', 'MPOC의 AWS Public Cloud 전환개발', 'CLOUD'],
    ['SK렌터카', '전기차 사업관리(데이터) 시스템 구축', 'DATA SYSTEM'],
    ['SK온', '통합 장비관리 시스템 구축', 'ENTERPRISE'],
    ['삼성엔지니어링', 'EDP 구축', 'ENTERPRISE'],
  ],
};
function renderProjects(year) {
  const rows = projects[year].map(([client, title, type]) => {
    const article = document.createElement('article');
    article.className = 'project-row';
    for (const [className, text] of [['project-client', client], ['project-title', title], ['project-type', type]]) {
      const node = document.createElement(className === 'project-client' ? 'h3' : 'p');
      node.className = className;
      node.textContent = text;
      article.append(node);
    }
    return article;
  });
  document.querySelector('#project-list').replaceChildren(...rows);
  document.querySelector('#project-list').setAttribute('aria-label', `${year}년 주요 사업 수행 이력`);
  document.querySelectorAll('[data-year]').forEach(button => {
    const active = button.dataset.year === year;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
document.querySelectorAll('[data-year]').forEach(button => button.addEventListener('click', () => renderProjects(button.dataset.year)));
renderProjects('2026');

let toastTimeout;
function showToast(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3200);
}
document.querySelector('.copy-email').addEventListener('click', async () => {
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
      copied = true;
    } else {
      const previousFocus = document.activeElement;
      const field = document.createElement('textarea');
      field.value = email;
      field.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(field);
      field.select();
      copied = document.execCommand('copy');
      field.remove();
      previousFocus?.focus({ preventScroll: true });
    }
  } catch { copied = false; }
  if (copied) showToast('이메일 주소를 복사했습니다.');
  else {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('[data-contact-email]'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    showToast('이메일을 선택했습니다. Ctrl+C 또는 길게 눌러 복사해 주세요.');
  }
});

if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main>section[id]')];
  const visibleSections = new Set();
  const sectionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) visibleSections.add(entry.target.id);
      else visibleSections.delete(entry.target.id);
    }
    const firstVisible = sections.find(section => visibleSections.has(section.id));
    nav.querySelectorAll('a').forEach(link => {
      const current = firstVisible && link.getAttribute('href') === `#${firstVisible.id}`;
      link.classList.toggle('current', Boolean(current));
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));
}
