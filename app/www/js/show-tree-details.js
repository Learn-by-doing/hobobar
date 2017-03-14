// This should probably be merged in index.js as we also deal with the navigation.

function getRequestandUpdateTreeDetails(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      vm.updateTreeDetails({
        treeType: data.type,
        treeDescription: data.description,
        treeImageURL: data.filename
      });
    } 
  };
  
  xhttp.open("GET", url, true);
  xhttp.send();
}


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
  props: ['pageStack', 'treeDescription', 'treeType', 'treeImageURL'],
  components: { customToolbar },
};

const welcomePage = {
  template: '#WelcomePage',
  methods: {
    pop,
    push() {
      this.pageStack.push(showTreeDetails);
      getRequest("http://localhost:3000/api/v1/tree/" + this.treeID);
    }
  },
  props: ['pageStack', 'treeID'],
  components: { customToolbar }
};

var vm = new Vue({
  el: '.app',
  template: '#main',
  data() {
    return {
      pageStack: [welcomePage],
	    treeDescription: "Default tree description.",
	    treeType: "Default tree type.",
	    treeImageURL: "Default file URL",
      treeID: "1" // Default tree ID
    };
  },
  methods: {
    updateTreeDetails: function(data) {
      this.treeDescription = data.treeDescription;
      this.treeType = data.treeType;
      this.treeImageURL = data.treeImageURL;
    } 
  }
});


