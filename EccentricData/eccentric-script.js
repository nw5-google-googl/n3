function showModal(modalHtml) {
    let eccentricApp = document.querySelector("#eccentric-app");
    eccentricApp.innerHTML = `<div id="eccentric-modal">${modalHtml}</div>`;
}

function hideModal() {
    let eccentricApp = document.querySelector("#eccentric-app");
    eccentricApp.innerHTML = ``;
}

function showLoginPanel() {
    let modalHtml = `<div id="modal-login" class="scale-and-opacity-animation">
            <div id="modal-login-top">
                <p></p>
            </div>
            <div id="modal-login-middle">
                <p></p>
            </div>
            <div id="modal-login-bottom">
                <btn id="modal-login-btn-no" class="modal-login-btn modal-btn-no">
                    <p></p>
                </btn>
                <btn id="modal-login-btn-yes" class="modal-login-btn modal-btn-yes">
                    <p></p>
                </btn>
            </div>
        </div>`;
    showModal(modalHtml);
    let textTitle = document.querySelector("#modal-login-top p");
    let textMiddle = document.querySelector("#modal-login-middle p");
    let textDecline = document.querySelector("#modal-login-btn-no p");
    let textAccept = document.querySelector("#modal-login-btn-yes p");
    let btnDecline = document.querySelector("#modal-login-btn-no");
    let btnAccept = document.querySelector("#modal-login-btn-yes");
    

    if (isRussianLanguage()) {
        textTitle.textContent = `АВТОРИЗАЦИЯ`;
        textMiddle.textContent = `АВТОРИЗУЙСЯ, ЧТОБЫ НАДЁЖНО СОХРАНИТЬ СВОЙ ПРОГРЕСС`;
        textDecline.textContent = `ОТКАЗАТЬСЯ`;
        textAccept.textContent = `АВТОРИЗОВАТЬСЯ`;
    } else {
        textTitle.textContent = `AUTHORIZATION`;
        textMiddle.textContent = `LOG IN TO SECURELY SAVE YOUR PROGRESS`;
        textDecline.textContent = `DECLINE`;
        textAccept.textContent = `ACCEPT`;
    }
    btnDecline.addEventListener("click", hideModal);
    btnAccept.addEventListener("click", () => {
        gamePushInstance.player.login();
        hideModal();
    });


}

function showRequestReview() {
    let modalHtml = `<div id="modal-review"  class="scale-and-opacity-animation">
            <div id="modal-review-top">
                <img src="EccentricData/Icons/review_stars.png">
            </div>
            <div id="modal-review-middle">
            </div>
            <div id="modal-review-bottom">
                <button id="modal-review-btn-no" class="modal-review-btn modal-btn-no">
                </button>
                <button id="modal-review-btn-yes" class="modal-review-btn modal-btn-yes">
                </button>
            </div>
            </div>`;
    showModal(modalHtml);
    let textMiddle = document.querySelector("#modal-review-middle");
    let btnNo = document.querySelector("#modal-review-btn-no");
    let btnYes = document.querySelector("#modal-review-btn-yes");

    btnNo.addEventListener("click", hideModal);
    btnYes.addEventListener("click", () => {
        gamePushInstance.app.requestReview();
        hideModal();
    });
  
    if (isRussianLanguage()) {
        textMiddle.textContent = `НРАВИТСЯ ИГРА?`;
        btnNo.textContent = `НЕТ`;
        btnYes.textContent = `ДА`;
    } else {
        textMiddle.textContent = `DO YOU LIKE THIS GAME?`;
        btnNo.textContent = `NO`;
        btnYes.textContent = `YES`;
    }

}

function showLeaderboard() {
    let title = isRussianLanguage() ? "Таблица лидеров" : "Leaderboard";
    let urlDefaultAvatar = "EccentricData/Icons/icon_player.png";
    let modalHtml = `<div id="modal-leaderboard"  class="scale-and-opacity-animation">
        <div id="modal-leaderboard-top">
            <div class="title">${title}</div>
            <img src="EccentricData/Icons/btn_close.png" class="modal-content-top-btn-close">
        </div>
        <div id="modal-leaderboard-middle">
            <div class="modal-leaderboard-middle-item" id="modal-leaderboard-middle-item-0">
                <div class="modal-leaderboard-middle-item-number"></div>
                <img src=${urlDefaultAvatar} alt="" class="modal-leaderboard-middle-item-avatar">
                <div class="modal-leaderboard-middle-item-name"></div>
                <div class="modal-leaderboard-middle-item-score">
                    <div class="modal-leaderboard-middle-item-score-placeholder">
                        <div class="modal-leaderboard-middle-item-score-placeholder-text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-leaderboard-middle-item" id="modal-leaderboard-middle-item-1">
                <div class="modal-leaderboard-middle-item-number"></div>
                <img src=${urlDefaultAvatar} alt="" class="modal-leaderboard-middle-item-avatar">
                <div class="modal-leaderboard-middle-item-name"></div>
                <div class="modal-leaderboard-middle-item-score">
                    <div class="modal-leaderboard-middle-item-score-placeholder">
                        <div class="modal-leaderboard-middle-item-score-placeholder-text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-leaderboard-middle-item" id="modal-leaderboard-middle-item-2" >
                <div class="modal-leaderboard-middle-item-number"></div>
                <img src=${urlDefaultAvatar} alt="" class="modal-leaderboard-middle-item-avatar">
                <div class="modal-leaderboard-middle-item-name"></div>
                <div class="modal-leaderboard-middle-item-score">
                    <div class="modal-leaderboard-middle-item-score-placeholder">
                        <div class="modal-leaderboard-middle-item-score-placeholder-text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-leaderboard-middle-item" id="modal-leaderboard-middle-item-3">
                <div class="modal-leaderboard-middle-item-number"></div>
                <img src=${urlDefaultAvatar} alt="" class="modal-leaderboard-middle-item-avatar">
                <div class="modal-leaderboard-middle-item-name"></div>
                <div class="modal-leaderboard-middle-item-score">
                    <div class="modal-leaderboard-middle-item-score-placeholder">
                        <div class="modal-leaderboard-middle-item-score-placeholder-text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-leaderboard-middle-item" id="modal-leaderboard-middle-item-4">
                <div class="modal-leaderboard-middle-item-number"></div>
                <img src=${urlDefaultAvatar} alt="" class="modal-leaderboard-middle-item-avatar">
                <div class="modal-leaderboard-middle-item-name"></div>
                <div class="modal-leaderboard-middle-item-score">
                    <div class="modal-leaderboard-middle-item-score-placeholder">
                        <div class="modal-leaderboard-middle-item-score-placeholder-text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-leaderboard-middle-item" id="modal-leaderboard-middle-item-5">
                <div class="modal-leaderboard-middle-item-number"></div>
                <img src=${urlDefaultAvatar} alt="" class="modal-leaderboard-middle-item-avatar">
                <div class="modal-leaderboard-middle-item-name"></div>
                <div class="modal-leaderboard-middle-item-score">
                    <div class="modal-leaderboard-middle-item-score-placeholder">
                        <div class="modal-leaderboard-middle-item-score-placeholder-text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-leaderboard-middle-item" id="modal-leaderboard-middle-item-6">
                <div class="modal-leaderboard-middle-item-number"></div>
                <img src=${urlDefaultAvatar} alt="" class="modal-leaderboard-middle-item-avatar">
                <div class="modal-leaderboard-middle-item-name"></div>
                <div class="modal-leaderboard-middle-item-score">
                    <div class="modal-leaderboard-middle-item-score-placeholder">
                        <div class="modal-leaderboard-middle-item-score-placeholder-text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-leaderboard-middle-item" id="modal-leaderboard-middle-item-7">
                <div class="modal-leaderboard-middle-item-number"></div>
                <img src=${urlDefaultAvatar} alt="" class="modal-leaderboard-middle-item-avatar">
                <div class="modal-leaderboard-middle-item-name"></div>
                <div class="modal-leaderboard-middle-item-score">
                    <div class="modal-leaderboard-middle-item-score-placeholder">
                        <div class="modal-leaderboard-middle-item-score-placeholder-text">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div id="modal-leaderboard-bottom"></div>
    </div>`;

    showModal(modalHtml);
    let btnClose = document.querySelector("#modal-leaderboard-top .modal-content-top-btn-close");
    btnClose.addEventListener("click", hideModal);
}

function setLeaderboardData(index, number, avatarUrl, name, score, isPlayer) {
    let items = document.querySelectorAll(".modal-leaderboard-middle-item");
    let placeholders = document.querySelectorAll(".modal-leaderboard-middle-item-score-placeholder");
    let numbers = document.querySelectorAll(".modal-leaderboard-middle-item-number");
    let avatars = document.querySelectorAll(".modal-leaderboard-middle-item-avatar");
    let names = document.querySelectorAll(".modal-leaderboard-middle-item-name");
    let scores = document.querySelectorAll(".modal-leaderboard-middle-item-score-placeholder-text");
    if (isPlayer == true) {
        items[index].classList.add("modal-leaderboard-middle-item-selected");
        placeholders[index].classList.add("modal-leaderboard-middle-item-score-placeholder-selected");
    }

    if (number.toString().length > 3) {
        numbers[index].style.fontSize = "0.8em";
    }
    numbers[index].textContent = number;

    avatars[index].src = avatarUrl;

    names[index].textContent = name;

    if (score.toString().length > 8) {
        scores[index].style.fontSize = "1.2em";
    }
    scores[index].textContent = score;

}

function showPromoGameModal(idGP, idYa, title) {
    let modalHtml = `<div id="modal-promo-game" class="scale-and-opacity-animation">
        <div id="modal-promo-game-content">
            <div class="modal-promo-game-content-top">
                <div></div>
                <p></p>
                <img src="EccentricData/Icons/btn_close.png" id="modal-promo-game-btn-close"></img>
            </div>
            <div class="modal-promo-game-content-middle">
                <img src="" alt="" id="modal-promo-game-content-middle-banner">
            </div>
            <div class="modal-promo-game-content-bottom">
                <a id="modal-promo-game-btn-open" class="modal-btn-yes" href="" target="_blank">
                    <p></p>
                </a>
            </div>
        </div>
    </div>`;
    showModal(modalHtml);
    let titlePromo = document.querySelector("#eccentric-modal .modal-promo-game-content-top p");
    let btnPromoClose = document.querySelector("#eccentric-modal .modal-promo-game-content-top img");
    let modalPromoBanner = document.querySelector("#eccentric-modal  #modal-promo-game-content-middle-banner");
    let btnOpenPromoGame = document.querySelector("#eccentric-modal #modal-promo-game-btn-open");

    btnPromoClose.addEventListener("click", hideModal);
    btnOpenPromoGame.addEventListener("click", hideModal);
    if (isRussianLanguage()) {
        modalPromoBanner.src = `url(https://s3.eponesh.com/games/files/9347/banner_${idGP}_ru.jpg)`;
        btnOpenPromoGame.href = `https://yandex.ru/games/app/${idYa}?lang=ru`;
        btnOpenPromoGame.textContent = "Играть";
    } else {
        modalPromoBanner.src = `url(https://s3.eponesh.com/games/files/9347/banner_${idGP}_en.jpg)`;
        btnOpenPromoGame.href = `https://yandex.com/games/app/${idYa}?lang=en`;
        btnOpenPromoGame.textContent = "Play";
    }
    titlePromo.textContent = `${title}`;

}

function showCustomModal(text, isCanClose) {

    let modalHtml = `<div id="modal-custom" class="scale-and-opacity-animation">
        <div class="modal-content-custom">
            <div class="modal-custom-content-top">
            </div>
            <div class="modal-custom-content-middle">
                <div id="modal-custom-title"></div>
            </div>
            <div class="modal-custom-content-bottom">
                <button id="modal-custom-btn-ok" class="modal-btn-yes">OK</button>
            </div>
        </div>
    </div>`;
    showModal(modalHtml);
    let title = document.querySelector("#eccentric-modal #modal-custom-title");
    let btnOk = document.querySelector("#eccentric-modal #modal-custom-btn-ok");
    title.textContent = text;
    if (isCanClose) {
        btnOk.addEventListener("click", hideModal);
    } else {
        btnOk.style.display = "none";
    }

}


function toggle(modal, enable) {
    if (enable === true) {
        modal.classList.add("show");
        modal.classList.remove("hide");
    } else {
        modal.classList.add("hide");
        modal.classList.remove("show");
    }
}

function showCollectionModal(nameCollection) {
    let modalHtml = `<div id="modal-our-games" class="scale-and-opacity-animation">
    <div class="modal-content-our-games">
        <img src="EccentricData/Icons/btn_close.png" class="modal-content-top-btn-close">
        <div class="modal-content-our-games-top">
            <div class="modal-content-our-games-top-title">
            </div>
        </div>
        <div class="modal-content-our-games-middle">
            <a href="" target="_blank" class="item-our-games">
                <div class="item-our-games-text"></div>
            </a>
            <a href="" target="_blank" class="item-our-games">
                <div class="item-our-games-text"></div>
            </a>
            <a href="" target="_blank" class="item-our-games">
                <div class="item-our-games-text"></div>
            </a>
            <a href="" target="_blank" class="item-our-games">
                <div class="item-our-games-text"></div>
            </a>
            <a href="" target="_blank" class="item-our-games">
                <div class="item-our-games-text"></div>
            </a>
            <a href="" target="_blank" class="item-our-games">
                <div class="item-our-games-text"></div>
            </a>
        </div>
        <div class="modal-content-our-games-bottom"></div>
    </div>
</div>`;
    showModal(modalHtml);
    let btnClose = document.querySelector("#eccentric-modal .modal-content-our-games .modal-content-top-btn-close");
    let name = document.querySelector("#eccentric-modal .modal-content-our-games-top-title");
    name.textContent = nameCollection;
    btnClose.addEventListener("click", hideModal);
}


function setCollectionData(index, nameGame, link, urlBanner) {
    let items = document.querySelectorAll(".item-our-games");
    let textItems = document.querySelectorAll(".item-our-games-text");

    toggle(items[index], true);
    items[index].style.backgroundImage = `url(${urlBanner})`;
    items[index].href = link;
    textItems[index].textContent = nameGame;

}
function isRussianLanguage(){
    let lang = getLang();
    return lang === "ru-RU" || lang === "ru";
    
}
function getLang() {
    let platform = window.location.hostname;
    let isYandex = platform.includes("yandex");
    return isYandex ? gamePushInstance.language : navigator.language;
}


function isMobile() {
    const ua = navigator.userAgent;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
        return true;
    } else {
        return false;
    }
}
function  isIOS(){
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
        return true;
    } else {
        return false;
    }
}

function getCurrentPlatform() {
    return window.location.hostname;
}
