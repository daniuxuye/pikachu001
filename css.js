
const string =`.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing:border-box;}
body{
    background: #ffe600;
    min-height:10vh;
}
.skin{
    position:relative;

}
.nose{
    border:10px solid black;
    border-color: black transparent ;
    border-bottom: none;
    width:0px;
    height:0px;
    position:relative;
    left:50%;
    top:148px;
    margin-left:-10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);

}
    50%{
        transform: rotate(5deg);

}

    100%{
        transform: rotate(-5deg);

}
}
.nose:hover{
    animation:wave 0.2s infinite ;
    transform-origin: 50% 100%;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left:-10px;
    border-radius: 10px 10px 0 0;
    background: black;

}
.eye {
    border:2px solid #000;
    width:64px;
    height:64px;
    position: absolute;
    left:50%;
    top:100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content:'';
    display: block;
    border:3px solid #000;
    width:30px;
    height:30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left:10px;
    top:3px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left:50%;
    top:170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -30px;
    z-index: 1;
}
.mouth .up .lip{
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    position: relative;
    position: absolute;
    margin-left: -50px;
    left:50%;
    background:#ffe600;

}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    border-right-color: transparent;
    transform: rotate(-25deg) translateX(-55px);
}
.mouth .up .lip.right{

    border-radius: 0 0 50px 0;

    border-left-color: transparent;

    transform: rotate(25deg) translateX(55px);

}
.mouth .up .lip::before{
    content:'';
    display: block;
    width: 9px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .up .lip::after{
    content:'';
    display: block;
    width: 100px;
    height: 9px;
    position: absolute;
    right: 0px;
    top: -10px;
    background: #ffe600;
}
.mouth .down{

    height: 190px;
    position:absolute;
    width: 100%;
    top:0px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border:3px solid black;
    width:150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 1000px;
    margin-left: -75px;
    border-radius: 80px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{

    width:200px;
    height:300px;
    position: absolute;
    bottom: -143px;
    left:50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
}
.face{
    position: absolute;
    left:50%;
    border:3px solid black;
    width:88px;
    height: 88px;
    top:220px;
    margin-left:-44px;
    z-index: 3;
}
.face > img{

    position: absolute;
    top: 40%;
    left:30%;

}
.face.left{
    transform: translateX(-180px);
    background-color: #ff0000;
    border-radius: 50%;
}
.face.left > img{
    left:60%;
    transform:rotateY(180deg);
    transform-origin: 0 0;

}
.face.right{
    transform: translateX(180px);
    background-color: #ff0000;
    border-radius: 50%;
}
`
export  default  string;
