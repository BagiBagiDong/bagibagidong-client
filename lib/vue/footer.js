Vue.component("footer-info",{
    template:`
    <footer class="footer">
        <div class="container">
            <span class="text-muted" v-html="footerinfo">
            </span>
        </div>
    </footer>
    `,
    props:['footerinfo']
})