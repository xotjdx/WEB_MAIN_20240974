function encodeByAES256(key, data)
{ //
    const cipher= CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(""), // IV초기화벡터
    padding: CryptoJS.pad.Pkcs7, // 패딩
    mode: CryptoJS.mode.CBC// 운영모드
    });
    return cipher.toString();
}
function decodeByAES256(key, data)
{
    const cipher= CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(""),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}
function encrypt_text(password)
{
    const k = "key"; // 클라이언트키
    const rk= k.padEnd(32, " "); // AES256은key길이가32
    const b= password;
    const eb= this.encodeByAES256(rk, b); // 실제암호화
    return eb;
    console.log(eb);
}
function decrypt_text()
{
    const k = "key"; // 서버의키
    const rk= k.padEnd(32, " "); // AES256은key길이가32
    const eb= session_get();
    const b= this.decodeByAES256(rk, eb); // 실제복호화
    console.log(b);
}