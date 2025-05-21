import { session_set2 } from './session.js';

function join()
{ // 회원가입기능
    let form = document.querySelector("#join_form"); // 로그인폼식별자
    let name = document.querySelector("#form3Example1c");
    let email = document.querySelector("#form3Example3c");
    let password = document.querySelector("#form3Example4c");
    let re_password= document.querySelector("#form3Example4cd");
    let agree = document.querySelector("#form2Example3c");
    form.action= "../index.html"; // 로그인성공시이동
    form.method= "get"; // 전송방식
    if(name.value.length=== 0 || email.value.length=== 0 || password.value.length=== 0 || re_password.length=== 0)
    {
        alert("회원가입폼에모든정보를입력해주세요.");
    }
    else
    {
        const newSignUp= new SignUp(name.value, email.value, password.value, re_password.value); // 회원가입정보객체생성
        session_set2(newSignUp); // 세션저장및객체전달
        form.submit(); // 폼실행
    }
}
    document.getElementById("join_btn").addEventListener('click', join); // 이벤트리스너

class SignUp 
{
    constructor(name, email, password, re_password)
    {
        // 생성자함수: 객체생성시회원정보초기화
        this._name= name;
        this._email= email;
        this._password= password;
        this._re_password= re_password;
    }
        // 전체회원정보를한번에설정하는함수
    setUserInfo(name, email, password, re_password) 
    {
        this._name= name;
        this._email= email;
        this._password= password;
        this._re_password= re_password;
    }
    // 전체회원정보를한번에가져오는함수
    getUserInfo() 
    {
        return {
        name: this._name,
        email: this._email,
        password: this._password,
        re_password: this._re_password
        };
    }
}