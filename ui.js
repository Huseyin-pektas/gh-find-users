class UI {
    constructor() {
        this.profile = document.getElementById('profile');

    }

    //profil arayüzü doldurur
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="container border my-4">
        <div class="row">
            <div class="col-md-3 ">
                <img src="${user.avatar_url}" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4 w-100"> Profili göster</a>
            </div>
            <div class="col-md-9">
                <span class="badge bg-primary">Açık Repolar ${user.public_repos}</span>
                <span class="badge bg-secondary">Özel Repolar ${user.public_gists}</span>
                <span class="badge bg-success">Takipçiler${user.followers}</span>
                <span class="badge bg-info">Takip Edilenler${user.following}</span>
                <br /> <br />
                <ul class="list-group">
                    <li class="list-group-item">Hakkında :${user.bio}</li>
                    <li class="list-group-item">Şirket :${user.company}</li>
                    <li class="list-group-item">Website :${user.login}</li>
                    <li class="list-group-item">Konum :${user.location}</li>
                    <li class="list-group-item">Hesap Oluşturma Tarihi:${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="fs-1 m-5">En Son Repolar</h3>
    <div class="repos"></div>`
    }
}



// temizleme işlemleri

clearProfile = () => {
    this.profile.innerHTML = "";
}
