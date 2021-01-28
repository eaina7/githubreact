import React from 'react'

function Users({users}) {
    console.log(users)
/*avatar_url: "https://avatars.githubusercontent.com/u/74833784?v=4"
bio: null
blog: ""
company: null
created_at: "2020-11-21T18:26:00Z"
email: null
events_url: "https://api.github.com/users/eaina7/events{/privacy}"
followers: 0
followers_url: "https://api.github.com/users/eaina7/followers"
following: 0
following_url: "https://api.github.com/users/eaina7/following{/other_user}"
gists_url: "https://api.github.com/users/eaina7/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/eaina7"
id: 74833784
location: null
login: "eaina7"
name: null
node_id: "MDQ6VXNlcjc0ODMzNzg0"
organizations_url: "https://api.github.com/users/eaina7/orgs"
public_gists: 0
public_repos: 8
received_events_url: "https://api.github.com/users/eaina7/received_events"
repos_url: "https://api.github.com/users/eaina7/repos"
site_admin: false
starred_url: "https://api.github.com/users/eaina7/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/eaina7/subscriptions"
twitter_username: null
type: "User"
updated_at: "2021-01-26T15:13:39Z"
url: "https://api.github.com/users/eaina7"
*/
    return (
        
            <div className= "users"> 
                { users && 
              <div>
                  <div>{users.id}</div>
              <div>{users.name}</div>
              <img src={users.avatar_url}/>
            </div>  
            
            
                
}
</div>
        
    );
}

export default Users
