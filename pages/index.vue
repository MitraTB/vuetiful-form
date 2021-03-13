<template>
  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <Renderer
            v-for="(element, name) in schema"
            :key="name"
            :element="element"
            v-model="form[name]"
          />
          <div class="form-group">
            <button @click.prevent="onSubmit" type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { parse } from  '~/.nuxt/libraries/Api';
import axios from 'axios'
import Renderer from '~/components/Renderer.vue'
export default {
  name: "app",
  components: { Renderer},
  data() {
    return {
      form: {
        firstName:'Mitra',
        lastName:'Tabatabaei',
        favoriteAnimal:''
      },
      schema:schema
    }
  },
  methods: {
    onSubmit() {
      console.log("Submit clicked");
    }
  },
created() {
axios.get('http://localhost:8000/schema')
.then(response => {
this.schema = parse(response.data);
})
.catch(error => {
console.log('Network error', error);
})
}
};
</script>
