var listProjects = [
    {
        id: 1,
        img: '../img/work/picture1.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 2,
        img: '../img/work/picture2.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 3,
        img: '../img/work/picture3.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 4,
        img: '../img/work/picture4.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 5,
        img: '../img/work/picture5.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
    {
        id: 6,
        img: '../img/work/picture6.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam corrupti repellat nemo totam error!',
    },
];
function showProjects() {

    $('#listProjects').html('');

    for (let i = 0; i < 3; i++) {
        var item = `
                        <div class="col-md-4">
                            <div class="row text-start">
                                <div class="card my-card" style="width: 28rem;">
                                    <img src="${listProjects[i].img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Blockchain· Supply Chain· Drug
                                            Supply</h6>
                                        <h3 class="card-text">${listProjects[i].content}</h3>
                                        <a href="#" class="card-link">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        for (let i = 4; i < 6; i++) {
            var item = `
                                        <div class="col-md-4">
                                            <div class="row text-start">
                                                <div class="card my-card" style="width: 28rem;">
                                                    <img src="${listProjects[i].img}" class="card-img-top" alt="...">
                                                    <div class="card-body">
                                                        <h6 class="card-subtitle mb-2 text-body-secondary">Blockchain· Supply Chain· Drug
                                                            Supply</h6>
                                                        <h3 class="card-text">${listProjects[i].content}</h3>
                                                        <a href="#" class="card-link">READ MORE</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;

            $('#listProjects').append(item);
        }
    }
}
