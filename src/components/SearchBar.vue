<template>
      <div class="inactiveUsers">
            <h2>InactiveUsers List:-</h2>
            <input type="text" v-model="search" placeholder="Search here.." class="searchBar">
            <ul v-for="user in searchQuery" :key="user.name" class="users">
                <li class="content"> <img :src="user.image" class="image" /> Name:- {{user.name}} Age:- {{user.age}}</li>
                <!-- <li v-if="user.display">Location:-{{user.Location}}</li>
                <button v-on:click="user.display=!user.display" class="btnBorder">Click to Know Location</button> -->
            </ul>
      </div>
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
            search:null,
            users: [
            {name: 'Chris hemsworth', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/800px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg', age: 27, status: 0, created_at: '2017-09-11', Location:'California', display:false },
            {name: 'Johnny Depp', image:'https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY209_CR1,0,140,209_AL_.jpg', age: 29, status: 1, created_at: '2017-09-01', Location:'Washinton DC', display:false },
            {name: 'Brad Pitt', image:'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX140_CR0,0,140,209_AL_.jpg', age: 23, status: 0, created_at: '2017-09-09', Location:'Florida', display:false  },
            {name: 'Angelina Jolie', image:'https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY209_CR15,0,140,209_AL_.jpg', age: 21, status: 1, created_at: '2017-09-21', Location:'Texas', display:false  },
            {name: 'Leonardo DiCaprio', image:'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY209_CR7,0,140,209_AL_.jpg', age: 20, status: 0, created_at: '2017-03-13', Location:'North Carolina', display:false  },
            {name: 'Tom Cruise', image:'https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR7,0,140,209_AL_.jpg', age: 28, status: 1, created_at: '2017-09-30', Location:'South Carolina', display:false  },
            {name: 'Arnold Schwarzenegger', image:'https://m.media-amazon.com/images/M/MV5BMTI3MDc4NzUyMV5BMl5BanBnXkFtZTcwMTQyMTc5MQ@@._V1_UY209_CR13,0,140,209_AL_.jpg', age: 27, status: 0, created_at: '2017-09-19', Location:'New York', display:false  },
            {name: 'Sylvester Stallone', image:'https://m.media-amazon.com/images/M/MV5BMTQwMTk3NDU2OV5BMl5BanBnXkFtZTcwNTA3MTI0Mw@@._V1_UY209_CR5,0,140,209_AL_.jpg', age: 29, status: 0, created_at: '2017-09-17', Location:'MaryLand', display:false  },
            {name: 'Kate Winslet', image:'https://m.media-amazon.com/images/M/MV5BODgzMzM2NTE0Ml5BMl5BanBnXkFtZTcwMTcyMTkyOQ@@._V1_UX140_CR0,0,140,209_AL_.jpg', age: 26, status: 0, created_at: '2017-09-04', Location:'Connecticut', display:false  },
            {name: 'Keanu Reeves', image:'https://m.media-amazon.com/images/M/MV5BNmNlNGU0ZDgtMDg3MS00ZGZmLTg4ZjMtYjMyZjVmNzlhNWIwXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY209_CR34,0,140,209_AL_.jpg', age: 25, status: 0, created_at: '2017-09-05', Location:'Ohio', display:false  },
            {name: 'Hugh Jackman', image:'https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX140_CR0,0,140,209_AL_.jpg', age: 22, status: 1, created_at: '2017-09-16', Location:'Delaware', display:false  },
            {name: 'Charlize Theron', image:'https://m.media-amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY209_CR8,0,140,209_AL_.jpg', age: 24, status: 0, created_at: '2017-04-01', Location:'Neveda', display:false  },
            {name: 'Will Smith', image:'https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY209_CR2,0,140,209_AL_.jpg', age: 27, status: 1, created_at: '2017-05-08', Location:'New Mexico', display:false  }
          ]
        }
       },

       computed:{
        //    searchBar(){
        //     return this.users.filter(function(user){
        //             return user.name.match(this.search)
        //       })
        //    }
        searchQuery(){
            if(this.search){
                 return this.users.filter((item)=>{
                       return this.search.toLowerCase().split("").every((v)=> item.name.toLowerCase().includes(v))
                 })
            } else{
                return this.users;
            }
        }
       }
}
</script>

<style scoped>

ul{
    list-style-type: none;
}
.inactiveUsers{
    background-color:brown;
    border: 2px solid coral;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;

}

.users{
    background-color:cadetblue;
    max-width: 20rem;
    border-radius: 5px;
    max-height: 20rem;
    padding-top: 10px;
}

.searchBar, .btnBorder{
    border-radius: 5px;
}

.content{
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
}

.image{
    width: 8rem;
    height: 8rem;
}

</style>