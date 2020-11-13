$(document).ready(function() {
    $('#usuarioB').on('keyup', function(e) {
        let username = e.target.value;

        // busca no github
        $.ajax ({
            url:'https://api.github.com/users/'+username, 
            data:{
                client_id:'c923f616a2e50d31ef85',
                client_secret:'7943e23ec057f444671b1d6e098ee75e0b3fab35'
            }
        }).done(function(user){
            $('#perfil').html(`
            <div class="card mb-3" style="max-width: 700px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${user.avatar_url}" class="card-img" alt="${user.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">${user.name}</h3>
                            <span  class="badge badge-success">Repositorios publicos: ${user.public_repos}</span>
                            <span  class="badge badge-success">Gists publicos: ${user.public_gists}</span>
                            <span  class="badge badge-success">Seguidores: ${user.followers}</span>
                            <span  class="badge badge-success">Seguidores: ${user.following}</span>
                            <br><br>
                            <a target="_blank" href="${user.html_url}" class="btn btn-primary btn-block" role="button">Ver perfil</a>
                        </div>
                    </div>
                </div>
            </div>
            `);
        });
    });
});