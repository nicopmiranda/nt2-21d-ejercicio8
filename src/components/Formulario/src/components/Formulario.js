export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  mixins: [],
  data () {
    return {
      formData : this.getInitialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120
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
      this.$store.dispatch('agregarUsuario', persona);
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


