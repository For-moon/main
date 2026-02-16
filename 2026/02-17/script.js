(function () {
    "use strict";

    // ===== THIẾT LẬP COUNTDOWN =====
    const tet2026 = new Date("February 17, 2026 00:00:00 GMT+0700").getTime();

    const gallery = document.getElementById("gallerySection");
    const card = document.getElementById("cardSection");
    const footer = document.getElementById("footerSection");
    const waitingDiv = document.getElementById("waitingArea");
    const postCountdownArea = document.getElementById("postCountdownArea");
    const openIntroBtn = document.getElementById("openIntroBtn");
    const openCardBtn = document.getElementById("openCardBtn");
    const receiveWishBtn = document.getElementById("receiveWishBtn");
    const hero = document.querySelector('.hero');

    let introShown = false;
    let cardShown = false;
    let waitingRemoved = false;

    // ----- HÀM HIỆN TOAST MESSAGE -----
    function showToast(message, icon = 'fas fa-heart') {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = `<i class="${icon}"></i> ${message} <i class="fas fa-smile-wink"></i>`;
        toastContainer.appendChild(toast);

        toast.offsetHeight;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 2800);
    }

    // ----- HÀM HIỆN INTRO -----
    function showIntro() {
        if (!gallery || introShown) return;
        gallery.classList.remove('hidden-content');
        introShown = true;
        setTimeout(() => {
            gallery.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }

    // ----- HÀM HIỆN THIỆP VÀ FOOTER -----
    function showCardAndFooter() {
        if (!card || cardShown) return;
        card.classList.remove('hidden-content');
        if (footer) footer.classList.remove('hidden-content');
        cardShown = true;
        //card.style.height = parseFloat(card.style.height) + 1000 + "px";
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
    }

    // ----- HÀM LOẠI BỎ WAITING MESSAGE KHỎI LAYOUT -----
    function removeWaitingMessage() {
        if (!waitingDiv || waitingRemoved) return;
        waitingDiv.classList.add('hidden');
        setTimeout(() => {
            if (waitingDiv && waitingDiv.parentNode) {
                waitingDiv.style.display = 'none';
            }
        }, 800);
        waitingRemoved = true;
    }

    // ----- KÍCH HOẠT KHI COUNTDOWN = 0 -----
    function onCountdownFinish() {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        removeWaitingMessage();

        if (postCountdownArea) {
            postCountdownArea.classList.remove('hidden-content');
        }

        if (!document.getElementById("tetMessage")) {
            const announcement = document.createElement("div");
            announcement.id = "tetMessage";
            announcement.className = "tet-message";
            announcement.innerHTML = '🎉 CHÚC MỪNG NĂM MỚI BÍNH NGỌ 2026 🎉';
            const countdownBox = document.getElementById("countdown");
            if (countdownBox) {
                countdownBox.parentNode.insertBefore(announcement, countdownBox.nextSibling);
            } else {
                hero.appendChild(announcement);
            }
        }
    }

    // ----- CẬP NHẬT ĐẾM NGƯỢC -----
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = tet2026 - now;

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (distance <= 0) {
            onCountdownFinish();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days < 10 ? "0" + days : days;
        hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;

        if (gallery && !gallery.classList.contains('hidden-content')) gallery.classList.add('hidden-content');
        if (card && !card.classList.contains('hidden-content')) card.classList.add('hidden-content');
        if (footer && !footer.classList.contains('hidden-content')) footer.classList.add('hidden-content');
        if (postCountdownArea && !postCountdownArea.classList.contains('hidden-content')) postCountdownArea.classList.add('hidden-content');

        if (waitingDiv && waitingDiv.style.display === 'none') {
            waitingDiv.style.display = '';
            waitingDiv.classList.remove('hidden');
            waitingRemoved = false;
        }

        const oldMsg = document.getElementById("tetMessage");
        if (oldMsg) oldMsg.remove();

        introShown = false;
        cardShown = false;
    }

    // ----- GẮN SỰ KIỆN -----
    if (openIntroBtn) {
        openIntroBtn.addEventListener('click', function () {
            if (!introShown) {
                showIntro();
                postCountdownArea.classList.add('hidden-content');
            }
        });
    }

    if (openCardBtn) {
        openCardBtn.addEventListener('click', function () {
            showCardAndFooter();
            openCardBtn.style.display = 'none';
        });
    }

    if (receiveWishBtn) {
        receiveWishBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showToast('Chúc mừng năm mới! Bạn đã nhận được lộc may mắn.', 'fas fa-envelope-open-text');

            const btn = e.currentTarget;
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Đã nhận lời chúc';
            btn.style.background = '#4caf50';
            btn.style.boxShadow = '0 9px 0 #2e7d32';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-gift"></i> Đã nhận';
            }, 1500);
        });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();