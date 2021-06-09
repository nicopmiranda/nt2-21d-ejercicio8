
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      url: 'https://60adc5c380a61f0017331a4f.mockapi.io/tp4/usuarios',
      formData : this.getInitialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120,
      personas: []
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },
    agregarPersona(persona){
      console.log(persona);
      this.personas.push(persona);
      this.postUsuarioAxios(persona);
    },
    async postUsuarioAxios(usuario){
      try {
        let res = await this.axios.post(this.url, usuario, {'content-type':'application/json'});
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      
    },
    getKeysPersonas(){
      return Object.keys(this.personas[0]);
    },

    enviar() {
      //SPREAD Operator
      console.log({...this.formData});
      //Agrego al array de personas
      this.agregarPersona(this.formData);
      //Borro la información despues de enviarla
      this.formData = this.getInitialData();
      this.formState._reset();
    }

  }
}


