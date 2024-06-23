//  github apiye istek atacağımız yerdir

class Github {
    BASE_URL = "https://api.github.com";

    constructor() {
        this.client_id = 'Ov23liqJBTBsOfzqIwQy';
        this.client_secret = '0e16a5b0ac6e531d3f124bf9ab366fd7fad6d125';
    }

    async getUser(user) {
        try {
            const response = await fetch(`${this.BASE_URL}/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            const profileResponse = await response.json()
    
            console.log(profileResponse)
    
            if (profileResponse.status == 200) {
                return {
                    profileResponse: { message: 'Not Found' }
                };
            }
    
            return{
                profileResponse,
            }
        } catch (error) {
            console.error("GitHub API hatası:", error);
            return { profileResponse: { message: 'Error' } }
        }
     
        
        
    };
}
