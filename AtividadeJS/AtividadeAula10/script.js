let users = []
let posts = []

async function fetchData() {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users')
    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')
    users = await userData.json()
    posts = await postsData.json()
}

async function setData(){
    await fetchData();

    const usersPosts = users.map((user) => {
        let specifiedUser = []
        
        posts.map((post) => {
            if (user.id == post.userId) {
                return specifiedUser.push({name: user.name, postTitle: post.title, postBody: post.body})
            }
        })
        return specifiedUser
    })

    console.log(usersPosts)
}

setData()