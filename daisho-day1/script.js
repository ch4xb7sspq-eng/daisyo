const helloBtn=document.getElementByld("helloBtn");
const message=document.getElementByld("message");

helloBtn.addEventListener("click",()=>{
    const hour=new Date().getHours();
    let greeting="こんにちは！";
    if(hour<12){
        greeting="おはようございます！";
    }else if(hour>=18){
        greeting="こんばんは！";
    }
    message.textContent=`${greeting} GitHub Pages の公開に成功しました！`;
});