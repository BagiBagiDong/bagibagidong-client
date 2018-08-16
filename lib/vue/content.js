Vue.component("content", {
  template: `
    <div class="container gridmain">
        <div id="uploadarea">
            <img src="./assets/img/icon-upload.png" class="mx-auto d-block" style="height: auto; max-width: 100px;padding-top:100%;"><img>
            Upload Here
        </div>
        <div class="col">
            <div id="userFiles" class=".card-columns" v-if="isonhome">
                <div class="card file text-center" v-for"userfile in userfiles">
                    <div class="card-body">
                        <img :src="geticonfromfilextension(userfile.url)" :alt="userfile.name">
                        <h5 class="card-title">{{ userfile.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ userfile.date }}</h6>
                        <a :href="userfile.url" class="card-link">
                            <img src="./assets/img/icon-download.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div id="allFiles" v-else >
                <div class="card file text-center" v-for="alluserfile in alluserfiles ">
                    <div class="card-body">
                        <img :src="geticonfromfilextension(alluserfile.url)" alt="alluserfile.title">
                        <h5 class="card-title">  {{alluserfile.title}} </h5>
                        <h6 class="card-subtitle mb-2 text-muted"> {{ alluserfile.owner }} </h6>
                        <h6 class="card-subtitle mb-2">Collaborators</h6>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="collaborator in alluserfile.collaborators "> {{collaborator.name}} </li>
                        </ul>
                        <a href="#" class="card-link">
                            <img src="./assets/img/icon-download.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `,
  methods: {
    geticonfromfilextension: function(filename) {
      let fileextension = filename.split(".");
      fileextension = fileextension[fileextension - 1];
      switch (fileextension.toLowerCase()) {
        case "txt":
          return "./assets/img/icon-text.png";
        case "pptx":
          return "./assets/img/icon-pptx.svg";
        case "docx":
          return "./assets/img/icon-docx.png";
        case "xlsx":
          return "./assets/img/icon-xlsx.jpg";
      }
    }
  },
  props: ["isonhome", "userfiles", "alluserfiles"]
});
