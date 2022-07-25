<template>
       <div class="activeUsers">
            <h2>ActiveUsers List:-</h2>
            <ul v-for="user in activeUsers" :key="user.age" class="users">
                <li>Name:- {{user.name}} Age:- {{user.age}}</li>
                <li v-if="user.display">Date:- {{user.created_at}}</li>
                <button v-on:click="user.display=!user.display">Click to know Date</button>
            </ul>
      </div>
</template>

<script>
import MixinsMethods from '../mixins/MixinsMethods';

export default {
    name:'ActiveUsers',
    mixins:[MixinsMethods],
       data(){
        return{
            status:1,
            users: [
            {name: 'glo abredit', age: 27, status: 0, created_at: '2017-09-11', display:false  },
            {name: 'gia fella', age: 29, status: 1, created_at: '2017-09-01', display:false  },
            {name: 'ohaneze david', age: 23, status: 0, created_at: '2017-09-09', display:false  },
            {name: 'paul david', age: 21, status: 1, created_at: '2017-09-21', display:false  },
            {name: 'john williams', age: 20, status: 0, created_at: '2017-03-13', display:false  },
            {name: 'mary jokers', age: 28, status: 1, created_at: '2017-09-30', display:false  },
            {name: 'chris aloha', age: 27, status: 0, created_at: '2017-09-19', display:false  },
            {name: 'johnson silva', age: 29, status: 0, created_at: '2017-09-17', display:false  },
            {name: 'sens carlos', age: 26, status: 0, created_at: '2017-09-04', display:false  },
            {name: 'sophia nkom', age: 25, status: 0, created_at: '2017-09-05', display:false  },
            {name: 'jo westley', age: 22, status: 1, created_at: '2017-09-16', display:false  },
            {name: 'sam john', age: 24, status: 0, created_at: '2017-04-01', display:false  },
            {name: 'dia dia', age: 27, status: 1, created_at: '2017-05-08', display:false  }
          ]
        }
       },

       computed:{
           activeUsers(){
              return  this.filter_by_created_Date(this.active_or_inactive_Users())
           }
       }

}
</script>

<style scoped>
ul{
    list-style-type: none;
}

.activeUsers{
    background-color: coral;
    border: 2px solid cadetblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 2rem;
    
}

.users{
    background-color:khaki;
    width: 15rem;
    border-radius: 5px;
    height: 4rem;
    padding-top: 10px;
}

</style>