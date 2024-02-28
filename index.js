// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    {"number" : 1, "message" : "안녕, 정수언니!"},
    {"number" : 2, "message" : "많은 식사를 함께했지. 덕분에 요리가 즐거워졌어!"},
    {"number" : 3, "message" : "밤새 젤다같이 했었는데, 우리 둘 플레이 스타일이 많이 달랐지 ㅎㅎ"},
    {"number" : 4, "message" : "처음으로 우리가 단둘이 있던 순간"},
    {"number" : 5, "message" : "먼저 손 내밀어 줘서 너무 고마워"},
    {"number" : 6, "message" : "더러우면 싸가지 없는 거예요"},
    {"number" : 7, "message" : "같이 테니스 치던 순간"},
    {"number" : 8, "message" : "언니가 추천해준 책"},
    {"number" : 9, "message" : "언니가 추천해준 애니"},
    {"number" : 10, "message" : "언니 덕분에 좋아하게 된 케이팝"},
    {"number" : 11, "message" : "같이 눈썹 문신한 날! 덕분에 쭈꾸미에 가까워졌어 ✨"},
    {"number" : 12, "message" : "나는 누군가와의 내일을 잘 그리지 못하는데"},
    {"number" : 13, "message" : "아무렇지도 않게 내가 있는 순간들을 얘기해 줘서 너무 기뻤어"},
    {"number" : 14, "message" : "진짜로 평생 친구해!"},
    {"number" : 15, "message" : "레전드 미모의 여성, 여자력 만렙 모습도 언젠가 본다.."},
    {"number" : 16, "message" : "언니 미모, 어케 다 담냐고.. 내가 사진 실력 키워볼게!!!"},
    {"number" : 17, "message" : "MZ샷 ㅎㅋㅋㅋㅋ 한국에서 만나면 다시 같이 찍어줘!"},
    {"number" : 18, "message" : "최고의 맛집! 언니가 알려준 맛집 리스트들 덕분에 즐거운 시간들을 보냈어!"},
    {"number" : 19, "message" : "언니가 골라준 착장이야! 덕분에 나두 단정해졌어! 어때, 꽤나 단정해?"},
    {"number" : 20, "message" : "이제는 익숙해진 저녁식사야. 같이 환연보고 짱 재밌었어 ㅎㅋㅋㅋ"},
    {"number" : 21, "message" : "같이 편집샵 갔었던 순간이다! 언니랑 간 뒤로 쇼디치 자주가게 되었징. 처음으로 빈티지 옷을 사게된 순간이기도 해!"},
    {"number" : 22, "message" : "같이 노래방 간 날이야. 영국 발음으로 랩하는 언니 넘넘 멋있어..😘"},
    {"number" : 23, "message" : "언니가 짐싸는 모습이네..ㅎㅎ 납감하고 싶어, However, 축복해. 하지만! 그리워.. Nevertheless, 행복해!! 😆"},
    {"number" : 24, "message" : "그동안 너무 즐거웠어! 불안한 걸음 일지라도 그 속에 설렘이 있기를. 또 힘든 순간들도 있겠지만 돌아보니 꽃길이길 기도해. 영국에서도 한국에서도 항상 행복했기를 또 하기를 진심으로 바라. 안녕으로 헤어졌으니 안녕으로 만나! 정수언니, 안녕!"}
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
    door.addEventListener('click', () => {
        // 상위 div의 class 번호를 찾아서 image url에 사용합니다
        const imageUrl = `image/card/card-${index+1}.png`;

        // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
        const doorDiv = document.querySelector(`.day-${index+1}`)
        const backDiv = doorDiv.querySelector(`.back`);

        const style = window.getComputedStyle(backDiv);
        const pTag = backDiv.querySelector('p')
        const text = modalMessageList[index]['message']

        // showModal 함수를 호출하여 모달을 표시합니다.
        showModal(imageUrl, text);
        // alert('이벤트 캘린더를 엽니다.');
    });
});