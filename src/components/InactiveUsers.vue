<template>
      <div class="inactiveUsers">
            <h2>InactiveUsers List:-</h2>
            <ul v-for="user in inActiveUsers" :key="user.name" class="users">
                <li>Name:- {{user.name}} Age:- {{user.age}}</li>
                <li v-if="user.display">Location:-{{user.Location}}</li>
                <button v-on:click="user.display=!user.display" class="btnBorder">Click to Know Location</button>
            </ul>
      </div>
      <!-- Reference: https://blog.logrocket.com/advanced-vue-js-concepts-mixins-custom-directives-filters-transitions-and-state-management-ca6955905156/ -->
</template>

<script>
import MixinsMethods from '../mixins/MixinsMethods'

export default {
       name:'InactiveUsers',
       mixins:[MixinsMethods],
       data(){
        return{
            status:0,
            // display:false,
            users: [
            {name: 'glo abredit', age: 27, status: 0, created_at: '2017-09-11', Location:'California', display:false },
            {name: 'gia fella', age: 29, status: 1, created_at: '2017-09-01', Location:'Washinton DC', display:false },
            {name: 'ohaneze david', age: 23, status: 0, created_at: '2017-09-09', Location:'Florida', display:false  },
            {name: 'paul david', age: 21, status: 1, created_at: '2017-09-21', Location:'Texas', display:false  },
            {name: 'john williams', age: 20, status: 0, created_at: '2017-03-13', Location:'North Carolina', display:false  },
            {name: 'mary jokers', age: 28, status: 1, created_at: '2017-09-30', Location:'South Carolina', display:false  },
            {name: 'chris aloha', age: 27, status: 0, created_at: '2017-09-19', Location:'New York', display:false  },
            {name: 'johnson silva', age: 29, status: 0, created_at: '2017-09-17', Location:'MaryLand', display:false  },
            {name: 'sens carlos', age: 26, status: 0, created_at: '2017-09-04', Location:'Connecticut', display:false  },
            {name: 'sophia nkom', age: 25, status: 0, created_at: '2017-09-05', Location:'Ohio', display:false  },
            {name: 'jo westley', age: 22, status: 1, created_at: '2017-09-16', Location:'Delaware', display:false  },
            {name: 'sam john', age: 24, status: 0, created_at: '2017-04-01', Location:'Neveda', display:false  },
            {name: 'dia dia', age: 27, status: 1, created_at: '2017-05-08', Location:'New Mexico', display:false  }
          ]
        }
       },

       computed:{
           inActiveUsers(){
              return  this.filter_by_created_Date(this.active_or_inactive_Users());
              
           }
       }
}
</script>

<style scoped>

ul{
    list-style-type: none;
}
.inactiveUsers{
    background-color: aquamarine;
    border: 2px solid coral;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;

}

.users{
    background-color: chartreuse;
    width: 15rem;
    border-radius: 5px;
    height: 4rem;
    padding-top: 10px;
}

.btnBorder{
    border-radius: 5px;
}

</style>