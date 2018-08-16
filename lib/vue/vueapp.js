Vue.component("user-file-management", {
    template:`
    <div>
        <navbar></navbar>
        <content></content>
        <footer-info :footerinfo="footerinfo"></footer-info>
    </div>
    `,
    data:function(){
        return{
            footerinfo:"2018 &#169; PT. KitaBisaLaluiSemua",
            isonhome:true,
            userfiles:[
                {name:"oi.txt",
                title: oi,
                date:"Agustus 2018"}
            ],
            alluserfiles:{
                
            }
        }
    }
})