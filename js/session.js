function session_get() 
{ //세션읽기
    if (sessionStorage) 
    {
        return sessionStorage.getItem("Session_Storage_test");
    } 
    else 
    {
        alert("세션스토리지지원x");
    }
}
function session_set() 
{ //세션저장
    let session_id= document.querySelector("#typeEmailX");
    if (sessionStorage) 
    {
        sessionStorage.setItem("Session_Storage_test", session_id.value);
    } 
    else 
    {
        alert("로컬스토리지지원x");
    }
}