
document.addEventListener('DOMContentLoaded', () => {
    const github = new Github();
    const ui = new UI();

    const searchUser = document.getElementById('searchUser');
    const searchButton = document.getElementById('searchButton');


    searchButton.addEventListener('click', getInput);

    function getInput() {

        if (searchUser.value == '') {
            alert('Kullanıcı adı girin!');
        }
        if (searchUser.value !== '') {

            github.getUser(searchUser.value).then(data => {

                console.log(searchUser.value, "kullanıcı adı:", searchUser.value);

                if (data.profileResponse.message === 'Not Found') {

                    alert('Kullanıcı bulunamadı!');

                } else  {
                    console.log("Kullanıcı gösteriliyor.", data.profileResponse);

                    ui.showProfile(data.profileResponse);
                }
            });
        } 
        else {
            ui.clearProfile();
            console.log(ui.clearProfile(),"Kullanıcı adı boş bırakıldı.");
        }
    }
});

