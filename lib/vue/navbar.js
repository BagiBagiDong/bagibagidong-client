Vue.component("navbar", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <a style="color: white; font-family: 'Courier New', Courier, monospace" class="navbar-brand" href="#">
            {{ sitename }}
        </a>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

                <li class="nav-item" v-for="tab in tabs">
                    <a class="nav-link" :href="tab.link"> {{tab.name}} <span class="sr-only">(current)</span></a>
                </li>
            
            </ul>
            
            
            <form class="form-inline my-2 my-lg-0 ">
                <div class="input-group gradientsearch">
                    <div class="input-group-prepend">
                        <span class="input-group-text noborder" id="basic-addon1">
                            <a style="-webkit-transform: rotate(-45deg); 
                            -moz-transform: rotate(-45deg); 
                                -o-transform: rotate(-45deg);
                                    transform: rotate(-45deg);
                                    cursor: context-menu;">&#9906;</a>
                        </span>
                    </div>
                    <input type="text" placeholder="Search" class="form-control noborder" aria-label="Search" aria-describedby="basic-addon1">
                </div>
            </form>

            <div class="navbar-nav dropdown userAccount">
                <button type="button" class="btn dropdown-toggle userAccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="./assets/img/userempty.png" alt="users profile picture" style="height: 50px; border-radius: 50%; box-shadow: 0 0 10px">
                </button>
                <div class="dropdown-menu cartViewer" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item">Pesan Belum Dibaca: {{ unreadmessages.length }}</a>
                    <div class="dropdown-divider"></div>
                    <ul class="nav flex-column">
                        <li class="nav-item" v-for="message in unreadmessages">
                            <a class="nav-link active" href="#">{{ message.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    `,
  props: [""],
  data: function() {
    return {
      sitename: "BagiBagiDong",
      unreadmessages: [
        { title: "Please read this" },
        { title: "Heloo are you there?" },
        { title: "Your Message is unread" }
      ],
      tabs: [{ name: "Home", link: "#" }, { name: "All shared", link: "#" }]
    };
  }
});
