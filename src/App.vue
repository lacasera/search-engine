<template>
  <div id="app">
      <div class="container-fluid">
          <div class="search-container">
              <form @submit.prevent.enter="search">
                  <input
                          type="text"
                          class="form-control search-input"
                          placeholder="Search"
                          v-model.lazy="query">
              </form>
              <div class="search-items">
                <item ></item>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
    import seacrhMixin from './mixins/search'
    import Item from './components/Items'
export default {
  name: 'app',
  data () {
    return {
        query: ''
    }
  },
    watch : {
        query: function (oldValue,  newValue) {
            console.log(oldValue)
            console.log(newValue)
        }
    },
    methods: {
      search: function () {
          this.postToBackEnd(this.query)
      }
    },
    mixins: [ seacrhMixin ],
    components: {
      'item': Item
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.search-container{
    margin: 100px;
    .search-input {
        border-radius: 20px;
    }
    .search-items{
        margin-top: 20px;
    }
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
