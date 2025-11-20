//1.在庫データ（JSON的な構造）
const items=[
    {id:"D001",name:"オレンジジュース",price:150,stock:20,minStock:5},
    {id:"D002",name:"コーラ",price:150,stock:12,minStock:5},
    {id:"D003",name:"お茶",price:120,stock:30,minStock:10}
];

//HTMLで<tbody id="item-list">と書いた部分をJavaScriptから取得する
const tbody=document.getElementById("item-list");

//2.表示用の関数　render()
function render(){
    //一度、中身を空にしてから作り直す
    tbody.innerHTML="";

    //itemsの中身を一件ずつ取り出してtr（行）を作る
    items.forEach(irem=>{
        const tr=document.createElement("tr");

        //在庫が少ないときはクラスを追加して背景色を変える
        if(items.stock<items.minStock){
            tr.classList.add("low-stock");
        }

        //行の中身（セル）をテンプレート文字列でまとめて書く
        tr.innerHTML=`
            <td>${items.id}</td>
            <td>${items.name}</td>
            <td>${items.price}</td>
            <td>${items.stock}</td>
            <td>
                <button onclick="changeStock('${items.id}',1)">+</button>
                <button onclick="changeStock('${items.id}',-1)">-</button>
            </td>
        `;
        //作ったtrをtbodyの中に追加する
        tbody.appendChild(tr);
    });
}

//3.在庫を変更する関数changeStock()
function changeStock(id,diff){
    //idが一致する商品を探す
    const item=items.find(i=>i.id===id);
    if (!item){
        return;//見つからなかったら何もしない
    }

    //在庫がマイナスにならないように０で止める
    if (item.stock<0);
        item.stock=0;
    }

    render();

render();