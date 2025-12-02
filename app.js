/* app.js */

// --- CLOUD ENGINE ---
const CLOUD_IMAGES = ['img/cloud-01.png', 'img/cloud-02.png', 'img/cloud-03.png', 'img/cloud-04.png'];
const TUNNEL = document.getElementById('cloud-tunnel');
const CLOUD_COUNT = 15;
const FLY_DURATION = 12;

function initClouds() {
    for (let i = 0; i < CLOUD_COUNT; i++) createCloud(i);
}

function createCloud(index) {
    const el = document.createElement('div');
    el.className = 'cloud-layer';
    const img = document.createElement('img');
    
    img.src = CLOUD_IMAGES[Math.floor(Math.random() * CLOUD_IMAGES.length)];
    img.onerror = () => { img.src = 'https://assets.codepen.io/1233608/cloud-01.png'; };
    
    el.appendChild(img);

    const x = (Math.random() - 0.5) * 800;
    const y = (Math.random() - 0.5) * 400;
    const r = (Math.random() - 0.5) * 60;
    const delay = -(FLY_DURATION / CLOUD_COUNT) * index;

    el.style.setProperty('--tx', `${x}px`);
    el.style.setProperty('--ty', `${y}px`);
    el.style.setProperty('--r', `${r}deg`);
    el.style.animation = `flyTowards ${FLY_DURATION}s linear infinite`;
    el.style.animationDelay = `${delay}s`;
    TUNNEL.appendChild(el);
}

// --- DATA & LOGIC ---
const STORAGE_KEY = 'sobriety_data_v2';

// Quotes
const QUOTES_DATA = [
    { m: "Каждый день — твоя победа.", f: "Каждый день — твоя победа." },
    { m: "Ты кузнец своего счастья.", f: "Ты творец своего счастья." },
    { m: "Иди вперед, не оборачивайся.", f: "Иди вперед, не оборачивайся." },
    { m: "Твоя воля — твой меч.", f: "Твоя воля — твой щит." },
    { m: "Свет внутри тебя разгонит тьму.", f: "Свет внутри тебя разгонит тьму." },
    { m: "Ты не один на этом пути.", f: "Ты не одна на этом пути." },
    { m: "Сегодня ты стал лучше, чем вчера.", f: "Сегодня ты стала лучше, чем вчера." },
    { m: "Держись курса, брат.", f: "Держись курса, сестра." },
    { m: "Ты достоин лучшей жизни.", f: "Ты достойна лучшей жизни." },
    { m: "Ты вернул себе свою жизнь.", f: "Ты вернула себе свою жизнь." },
    { m: "Главное — не скорость, а направление.", f: "Главное — не скорость, а направление." },
    { m: "Только сегодня я буду счастлив.", f: "Только сегодня я буду счастлива." },
    { m: "Твоё прошлое — это урок, а не приговор.", f: "Твоё прошлое — это урок, а не приговор." },
    { m: "Ты сильнее, чем тебе кажется.", f: "Ты сильнее, чем тебе кажется." },
    { m: "Сделай вдох. Ты справляешься.", f: "Сделай вдох. Ты справляешься." },
    { m: "Не усложняй. Просто не сегодня.", f: "Не усложняй. Просто не сегодня." },
    { m: "Ты — автор своей новой истории.", f: "Ты — автор своей новой истории." },
    { m: "Спокойствие — это твоя суперсила.", f: "Спокойствие — это твоя суперсила." },
    { m: "Маленькие шаги ведут к большим переменам.", f: "Маленькие шаги ведут к большим переменам." },
    { m: "Будь терпелив к себе.", f: "Будь терпелива к себе." },
    { m: "Свобода начинается с твоего решения.", f: "Свобода начинается с твоего решения." },
    { m: "Ты больше не раб своих привычек.", f: "Ты больше не раба своих привычек." },
    { m: "Победи себя — и выиграешь тысячи битв.", f: "Победи себя — и выиграешь тысячи битв." },
    { m: "Самая темная ночь — перед рассветом.", f: "Самая темная ночь — перед рассветом." },
    { m: "Ты строишь храм своей души.", f: "Ты строишь храм своей души." },
    { m: "Дорогу осилит идущий.", f: "Дорогу осилит идущая." },
    { m: "Сегодня — лучший день, чтобы начать жить.", f: "Сегодня — лучший день, чтобы начать жить." },
    { m: "Твоя трезвость — твой самый дорогой дар.", f: "Твоя трезвость — твой самый дорогой дар." },
    { m: "Не оглядывайся, ты уже не там.", f: "Не оглядывайся, ты уже не там." },
    { m: "Верь в процесс. Ты исцеляешься.", f: "Верь в процесс. Ты исцеляешься." },
    { m: "Ты нужен этому миру здоровым.", f: "Ты нужна этому миру здоровой." },
    { m: "Будь честен с самим собой.", f: "Будь честна с самой собой." },
    { m: "Страх исчезает, когда начинается действие.", f: "Страх исчезает, когда начинается действие." },
    { m: "Ты — капитан своего корабля.", f: "Ты — хозяйка своей судьбы." },
    { m: "Цени этот момент чистоты.", f: "Цени этот момент чистоты." },
    { m: "У тебя есть силы изменить всё.", f: "У тебя есть силы изменить всё." },
    { m: "Прости себя за прошлое.", f: "Прости себя за прошлое." },
    { m: "Сегодня ты выбираешь жизнь.", f: "Сегодня ты выбираешь жизнь." },
    { m: "Ты — пример для других.", f: "Ты — пример для других." },
    { m: "Свет в конце тоннеля — это ты.", f: "Свет в конце тоннеля — это ты." }
];

// State
let userData = {
    startTimestamp: null,
    name: '',
    gender: 'm',
    addiction: 'sober' // 'sober' or 'clean'
};

const introLayer = document.getElementById('intro-layer');
const appLayer = document.getElementById('app-layer');
const introSetup = document.getElementById('intro-setup');
const introReturning = document.getElementById('intro-returning');
let countdownInterval;

function initialize() {
    initClouds();
    
    // Vibration fix attempt on touch
    document.body.addEventListener('touchstart', () => { 
        if(navigator.vibrate) navigator.vibrate(10); 
    }, {once:true});

    const loaded = localStorage.getItem(STORAGE_KEY);
    if (loaded) {
        userData = JSON.parse(loaded);
        showReturning();
    } else {
        showSetup();
    }
}

function showSetup() {
    introReturning.classList.add('hidden'); introReturning.style.display = 'none';
    introSetup.classList.remove('hidden'); introSetup.style.display = 'flex';
}

function showReturning() {
    introSetup.classList.add('hidden'); introSetup.style.display = 'none';
    introReturning.classList.remove('hidden'); introReturning.style.display = 'flex';
    
    const welcomeMsg = document.getElementById('welcome-message');
    const namePart = userData.name ? `, ${userData.name}` : '';
    welcomeMsg.innerText = `С возвращением${namePart}`; 
    
    startTimer(userData.startTimestamp);
}

function enterApp() {
    if(navigator.vibrate) navigator.vibrate(50);
    
    updateStatusText();
    document.getElementById('display-addiction').innerText = userData.addiction === 'clean' ? "ЧИСТОТА" : "ТРЕЗВОСТЬ";

    introLayer.classList.add('dissolved');
    setTimeout(() => {
        introLayer.style.display = 'none';
        appLayer.classList.add('active');
        startQuoteCycle();
    }, 800);
}

function updateStatusText() {
    const name = userData.name || (userData.gender === 'f' ? "Подруга" : "Друг");
    let state = "";
    let daysLabel = "";
    
    if (userData.gender === 'f') {
        state = userData.addiction === 'clean' ? "чистая" : "трезвая";
    } else {
        state = userData.addiction === 'clean' ? "чистый" : "трезвый";
    }
    document.getElementById('status-text').innerText = `${name}, ты ${state}`;
    
    daysLabel = userData.addiction === 'clean' ? "Всего дней в чистоте" : "Всего дней в трезвости";
    document.getElementById('total-days-label').innerText = daysLabel;
}

// SAVE & START
document.getElementById('start-journey-btn').addEventListener('click', () => {
    const dateInput = document.getElementById('intro-date-input');
    const nameInput = document.getElementById('intro-name');
    
    const addRadio = document.querySelector('input[name="addiction"]:checked');
    const addictionVal = addRadio ? addRadio.value : 'sober';
    
    const genRadio = document.querySelector('input[name="gender"]:checked');
    const genderVal = genRadio ? genRadio.value : 'm';

    const dateVal = dateInput ? dateInput.value : '';
    const nameVal = nameInput ? nameInput.value : '';

    if (!dateVal) {
        document.getElementById('intro-setup').classList.add('animate-pulse');
        setTimeout(()=>document.getElementById('intro-setup').classList.remove('animate-pulse'), 500);
        return;
    }
    
    const ts = new Date(dateVal).getTime();
    if (isNaN(ts) || ts > Date.now()) return alert('Дата должна быть в прошлом');

    userData = {
        startTimestamp: ts,
        name: nameVal,
        gender: genderVal,
        addiction: addictionVal
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    startTimer(ts);
    enterApp();
});

document.getElementById('enter-app-btn').addEventListener('click', enterApp);

function startTimer(startTimestamp) {
    if(countdownInterval) clearInterval(countdownInterval);
    const update = () => {
        const now = Date.now();
        const diff = now - startTimestamp;
        if(diff < 0) return; 
        
        const dateStart = new Date(startTimestamp);
        const dateNow = new Date(now);

        let years = dateNow.getFullYear() - dateStart.getFullYear();
        let months = dateNow.getMonth() - dateStart.getMonth();
        let days = dateNow.getDate() - dateStart.getDate();
        if (days < 0) {
            months--;
            const prevMonth = new Date(dateNow.getFullYear(), dateNow.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('total-days').innerText = totalDays;

        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('years').innerText = String(years).padStart(2,'0');
        document.getElementById('months').innerText = String(months).padStart(2,'0');
        document.getElementById('days').innerText = String(days).padStart(2,'0');
        document.getElementById('hours').innerText = String(hours).padStart(2,'0');
        document.getElementById('minutes').innerText = String(mins).padStart(2,'0');
        document.getElementById('seconds').innerText = String(secs).padStart(2,'0');
        
        document.getElementById('years-label').innerText = getPlural(years, 'ГОД', 'ГОДА', 'ЛЕТ');
        document.getElementById('months-label').innerText = getPlural(months, 'МЕСЯЦ', 'МЕСЯЦА', 'МЕСЯЦЕВ');
        document.getElementById('days-label').innerText = getPlural(days, 'ДЕНЬ', 'ДНЯ', 'ДНЕЙ');
    };
    update();
    countdownInterval = setInterval(update, 1000);
}

function getPlural(n, one, few, many) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return many;
    if (n1 > 1 && n1 < 5) return few;
    if (n1 === 1) return one;
    return many;
}

// RESET LOGIC
const resetBtn = document.getElementById('reset-btn');
const progressCircle = document.querySelector('.progress-ring__circle');
const circleLength = 175.9;
let pressTimer, isPressing = false;

function startPress() {
    isPressing = true;
    progressCircle.style.transition = 'stroke-dashoffset 1.5s linear';
    progressCircle.style.strokeDashoffset = '0';
    pressTimer = setTimeout(() => { if(isPressing) { showResetModal(); cancelPress(); }}, 1500);
}
function cancelPress() {
    isPressing = false;
    clearTimeout(pressTimer);
    progressCircle.style.transition = 'stroke-dashoffset 0.2s linear';
    progressCircle.style.strokeDashoffset = circleLength;
}
resetBtn.addEventListener('mousedown', startPress);
resetBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startPress(); });
resetBtn.addEventListener('mouseup', cancelPress);
resetBtn.addEventListener('touchend', cancelPress);

// MODALS SHOW/HIDE
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
function showResetModal() {
    if(navigator.vibrate) navigator.vibrate(100);
    modalOverlay.classList.remove('hidden');
    requestAnimationFrame(() => {
        modalOverlay.classList.remove('opacity-0');
        modalContent.classList.remove('scale-90');
        modalContent.classList.add('scale-100');
    });
}
function hideResetModal() {
    modalOverlay.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-90');
    setTimeout(() => modalOverlay.classList.add('hidden'), 500);
}
document.getElementById('cancel-reset').addEventListener('click', hideResetModal);
document.getElementById('confirm-reset').addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload(); 
});

// SETTINGS
const settingsModal = document.getElementById('settings-modal');
document.getElementById('settings-btn').addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
    document.getElementById('settings-name').value = userData.name || '';
    
    if(userData.addiction === 'clean') document.getElementById('s-addiction-clean').checked = true;
    else document.getElementById('s-addiction-sober').checked = true;

    if(userData.gender === 'f') document.getElementById('s-gender-f').checked = true;
    else document.getElementById('s-gender-m').checked = true;

    if(userData.startTimestamp) {
        const date = new Date(parseInt(userData.startTimestamp));
        const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
        document.getElementById('settings-date-input').value = local;
    }
});
document.getElementById('close-settings').addEventListener('click', () => settingsModal.classList.add('hidden'));

document.getElementById('save-settings').addEventListener('click', () => {
    const dateInput = document.getElementById('settings-date-input');
    const nameInput = document.getElementById('settings-name');
    const addVal = document.querySelector('input[name="settings-addiction"]:checked')?.value || 'sober';
    const genderVal = document.querySelector('input[name="settings-gender"]:checked')?.value || 'm';

    if(dateInput && dateInput.value) {
        userData.startTimestamp = new Date(dateInput.value).getTime();
        userData.name = nameInput ? nameInput.value : '';
        userData.addiction = addVal;
        userData.gender = genderVal;
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        
        startTimer(userData.startTimestamp);
        updateStatusText();
        
        settingsModal.classList.add('hidden');
    }
});

// --- GROUP LIST & MODAL LOGIC (UPDATED) ---

const infoModal = document.getElementById('info-modal');
const groupsList = document.getElementById('groups-list');
const cityInput = document.getElementById('city-search');

// New Detail Modal Elements
const groupDetailModal = document.getElementById('group-detail-modal');
const detailName = document.getElementById('detail-group-name');
const detailCity = document.getElementById('detail-group-city');
const detailMetro = document.getElementById('detail-group-metro');
const detailAddress = document.getElementById('detail-group-address');
const detailTime = document.getElementById('detail-group-time');
const detailContact = document.getElementById('detail-group-contact');
const detailDirections = document.getElementById('detail-group-directions');
const detailDirectionsBlock = document.getElementById('detail-directions-block');
const detailWebsite = document.getElementById('detail-group-website');
const detailEmail = document.getElementById('detail-group-email');

const btnCall = document.getElementById('detail-btn-call');
const btnCallText = document.getElementById('detail-btn-call-text');
const btnMap = document.getElementById('detail-btn-map');

document.getElementById('info-btn').addEventListener('click', () => {
    infoModal.classList.remove('hidden');
    renderGroups();
});
document.getElementById('close-info').addEventListener('click', () => infoModal.classList.add('hidden'));

document.getElementById('close-detail').addEventListener('click', () => {
    groupDetailModal.classList.add('hidden');
});

// Back button in detail modal returns to list
document.getElementById('back-to-list').addEventListener('click', () => {
    groupDetailModal.classList.add('hidden');
    infoModal.classList.remove('hidden');
});

function openGroupDetail(group) {
    groupDetailModal.classList.remove('hidden');

    const communityName = group.communityName || 'Без названия';
    
    // Fill Basic Data
    detailName.innerText = `"${communityName}"`;
    detailCity.innerText = group.city;
    
    // Metro
    if (group.metro) {
        detailMetro.innerText = group.metro;
        detailMetro.style.display = 'block';
    } else {
        detailMetro.style.display = 'none';
    }

    detailAddress.innerText = group.address;
    detailTime.innerText = group.time;
    detailContact.innerText = group.displayContact || group.contact || 'Нет контактов';

    // Website Button
    if (group.website) {
        detailWebsite.href = group.website.startsWith('http') ? group.website : 'https://' + group.website;
        detailWebsite.classList.remove('hidden');
    } else {
        detailWebsite.classList.add('hidden');
    }

    // Email Button
    if (group.email && !group.email.includes("perepiska")) {
        detailEmail.href = `mailto:${group.email}`;
        detailEmail.classList.remove('hidden');
    } else {
        detailEmail.classList.add('hidden');
    }

    // Directions
    if (group.directions) {
        detailDirections.innerText = group.directions;
        detailDirectionsBlock.classList.remove('hidden');
    } else {
        detailDirectionsBlock.classList.add('hidden');
    }

    // Logic for ONLINE or OFFLINE
    const isOnline = group.city.toLowerCase().includes("онлайн") || group.city.toLowerCase().includes("интернет") || group.address.includes('http');
    
    // MAP Button Logic
    if (isOnline) {
        btnMap.style.display = 'none';
    } else {
        btnMap.style.display = 'flex';
        btnMap.onclick = () => {
            // Priority: Geo coordinates > Address Search
            if (group.geo && group.geo.lat && group.geo.lon) {
                window.open(`https://yandex.ru/maps/?pt=${group.geo.lon},${group.geo.lat}&z=17&l=map`, '_blank');
            } else {
                window.open(`https://yandex.ru/maps/?text=${encodeURIComponent(group.city + ' ' + group.address)}`, '_blank');
            }
        };
    }

    // CALL / JOIN Button Logic
    // If contact exists, format it.
    let rawContact = group.contact || "";
    // If it is online link
    if (isOnline && (group.address.includes('http') || group.website)) {
        btnCallText.innerText = "ПОДКЛЮЧИТЬСЯ";
        btnCall.onclick = () => {
             const link = group.website || group.address;
             if (link.startsWith('http')) window.open(link, '_blank');
        };
    } else {
        btnCallText.innerText = "ПОЗВОНИТЬ";
        
        if (rawContact) {
            // Find first valid phone number part (simple regex)
            // Some contacts are like "+7999.. +7888..."
            const phoneMatch = rawContact.match(/[+]?[\d\s\-\(\)]{10,}/); 
            const phoneToCall = phoneMatch ? phoneMatch[0] : rawContact;
            
            btnCall.onclick = () => {
                 window.location.href = `tel:${phoneToCall.replace(/[^+\d]/g, '')}`;
            };
            btnCall.style.opacity = "1";
            btnCall.style.pointerEvents = "auto";
        } else {
            btnCall.style.opacity = "0.5";
            btnCall.style.pointerEvents = "none";
        }
    }
}

function renderGroups() {
    const typeRadio = document.querySelector('input[name="group-type"]:checked');
    const filterType = typeRadio ? typeRadio.value : 'AA';
    
    const cityEl = document.getElementById('city-search');
    const filterCity = cityEl ? cityEl.value.toLowerCase() : '';
    
    // Sort logic: Online groups at the end, then by City
    const filtered = GROUPS_DB.filter(g => 
        g.type === filterType && 
        (g.city.toLowerCase().includes(filterCity) || (g.communityName && g.communityName.toLowerCase().includes(filterCity)))
    );

    groupsList.innerHTML = '';
    if (filtered.length === 0) {
        groupsList.innerHTML = '<div class="text-center text-blue-900/50 text-sm mt-4 font-bold">Ничего не найдено</div>';
        return;
    }

    filtered.forEach(g => {
        // Create Clickable Card
        const item = document.createElement('div');
        item.className = 'group-card bg-white/40 p-4 rounded-xl border border-white/50 text-left mb-3 cursor-pointer relative overflow-hidden';
        
        const communityName = g.communityName || 'Группа';
        const metroInfo = g.metro ? `<span class="text-[10px] bg-white/50 px-1.5 py-0.5 rounded text-blue-900/70 border border-blue-900/10 ml-2">${g.metro}</span>` : '';

        item.innerHTML = `
            <div class="flex justify-between items-start pointer-events-none">
                <div class="pointer-events-none w-full">
                    <div class="font-bold text-blue-900 text-base leading-tight pr-8">"${communityName}"</div>
                    <div class="text-xs text-blue-900/60 font-semibold mt-1 uppercase tracking-wide flex items-center flex-wrap gap-y-1">
                        ${g.city}
                        ${metroInfo}
                    </div>
                </div>
                <div class="absolute right-4 top-4 text-[10px] bg-blue-900/10 text-blue-900 font-bold px-2 py-1 rounded-md border border-blue-900/20">
                    ${g.type}
                </div>
            </div>
            <div class="mt-2 text-xs text-blue-900/80 truncate pointer-events-none pr-6">
                ${g.address}
            </div>
            <div class="mt-1 text-[10px] text-blue-900/60 font-mono pointer-events-none">
               ${g.time ? g.time.split(';')[0] : ''} </div>
            <div class="absolute right-2 bottom-2 opacity-20 text-blue-900 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </div>
        `;

        // Click Event -> Open Modal
        item.addEventListener('click', () => {
            if(navigator.vibrate) navigator.vibrate(10);
            openGroupDetail(g);
        });

        groupsList.appendChild(item);
    });
}

cityInput.addEventListener('input', renderGroups);
document.querySelectorAll('input[name="group-type"]').forEach(r => {
    r.addEventListener('change', renderGroups);
});

// QUOTES LOGIC
const quoteEl = document.getElementById('quote-text');

function typeQuote(text) {
    quoteEl.textContent = '';
    let i = 0;
    
    function next() {
        if(i < text.length) {
            quoteEl.textContent += text.charAt(i);
            
            // --- HAPTIC EFFECT (Android Only) ---
            if (navigator.vibrate && i % 2 === 0) {
                try {
                    navigator.vibrate(5); 
                } catch(e) { /* ignore errors */ }
            }
            // ------------------------------------

            i++;
            // Random speed for human-like typing
            const randomSpeed = 30 + Math.random() * 40; 
            setTimeout(next, randomSpeed);
        } else {
            setTimeout(startQuoteCycle, 8000);
        }
    }
    next();
}

function startQuoteCycle() {
    const gender = userData.gender || 'm';
    const pair = QUOTES_DATA[Math.floor(Math.random() * QUOTES_DATA.length)];
    let txt = gender === 'f' ? pair.f : pair.m;
    typeQuote(txt);
}

// Init on load
window.onload = initialize;