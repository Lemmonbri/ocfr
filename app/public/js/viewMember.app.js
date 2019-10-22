var viewMember = new Vue({
  el: '#viewMember',
  data: {
    pid: 0,
    person: {}
  },
  methods: {
    fetchPerson() {
      fetch('api/people/index.php?id='+this.pid)
      .then(response => response.json())
      .then(json => { viewMember.person = json })
    }
  },
  created() {

    let params = new URLSearchParams(location.search);
    this.pid = params.get('id'); // Extracts 'id' from query string

    //TODO fetch member, based on the id
    this.fetchPerson();
  }
});
