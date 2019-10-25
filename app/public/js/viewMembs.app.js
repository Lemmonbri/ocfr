var viewMembs = new Vue({
  el: '#viewMembs',
  data: {
    selected: '',
    people: []
  },
  methods: {
    fetchMembs() {
      fetch('api/people/')
      .then(response => response.json())
      .then(json => { viewMembs.people = json })
    },

    handleRowClick(p) {
      membAdd.person = p;
    }
  },
  created() {
    this.fetchMembs();
  }
});
