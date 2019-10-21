var viewMember = new Vue({
  el: '#viewMember',
  data: {
    person: []
  },
  methods: {
    viewMember() {
      viewMembs.person = person;
    }
  },
  created() {
    this.fetchMembs();
  }
});
