// var vm = new Vue({
//   el: '#app',
//   template:
//   '<v-ons-page>\
//     <v-ons-toolbar>\
//       <div class="left">\
//       <v-ons-back-button :on-click="pop">BACK</v-ons-back-button>\
//     </div>\
//       <div class="center">Tree Details</div>\
//     </v-ons-toolbar>\
//     <article style="text-align: center">\
//     <header>\
//     <img src="" alt="The image you are looking for is unavailable.">\
//     </header>\
//     <section>\
//     <h1>\
//       Type: {{ treeType }} \
//     </h1>\
//     <h3>\
//       Description\
//     </h3>\
//     <p>\
//       {{ treeDescription }}\
//     </p>\
//     </section>\
//     </article>\
//   </v-ons-page>'
// });

// var treeType = "Apple Tree";
// var treeDescription = "A tree that bears apples.";

var id = 1;
var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://localhost:3000/api/v1/tree/1", true);
xhttp.send();
alert(xhttp.responseText);

const pop = function() {
  this.pageStack.pop();
};

const customToolbar = {
  template: '#custom-toolbar',
  props: ['pop', 'backLabel']
};

const showTreeDetails = {
  template: '#ShowTreeDetails',
  methods: { pop },
  props: ['pageStack', 'treeType', 'treeDescription'],
  components: { customToolbar }
};

const welcomePage = {
  template: '#WelcomePage',
  methods: {
    pop,
    push() {
      this.pageStack.push(showTreeDetails);
    }
  },
  props: ['pageStack'],
  components: { customToolbar }
};

var vm = new Vue({
  el: '.app',
  template: '#main',
  data() {
    return {
      pageStack: [welcomePage]
    };   
  }
});


