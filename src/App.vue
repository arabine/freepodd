<template>
<div style="height:100vh; width=100vw;">

  <section class="section p-0">
      <div class="container">
        <router-view></router-view>
      </div>
  </section>

</div>
</template>


<script>

// Import the toast function
import Toast from './toast.js';

export default {
  name: 'App',
  components: {
 
  },
  data () {
      return { 

      }
    },
  methods: {

  },
    //====================================================================================================================
  beforeCreate: function() {

  },
  //====================================================================================================================
  created() {
     this.$eventHub.on('setAlert', (text, type, timeout) => {
      Toast({
          text: text,
          duration: timeout,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          style: {
            background: type == 'error' ? 'hsl(348, 86%, 61%)' : type == 'success' ? 'hsl(153, 53%, 53%)' : 'hsl(229, 53%, 53%)'
          },
          stopOnFocus: true, // Prevents dismissing of toast on hover
          onClick: function(){} // Callback after click
        }).showToast();
      });

  },
  //====================================================================================================================
  beforeDestroy() {
    this.$eventHub.off('setAlert');
  },
  //====================================================================================================================
  mounted() {
      

  }
  
};
</script>

