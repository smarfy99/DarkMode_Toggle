const checkbox = document.getElementById('checkbox');
// addEventListener(event종류, 함수)
// checkbox를 click 했을 때 해당 함수를 실행
checkbox.addEventListener('click', () => {
    //웹사이트의 배경 바꾸기
    //toggle - 0과 1이 반복
    //class가 존재하면 클래스 제거, 클래스가 존재하지 않으면 클래스 추가하는 메서드
    document.body.classList.toggle('dark');
});