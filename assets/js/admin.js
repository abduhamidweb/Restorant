let BASE_URL = 'http://localhost:5000/api/restaurants/'

    !(function () {
        let token = localStorage.getItem("token");
        if (!token) location = "login.html";
    })();


async function section1() {
    let staticOurFood = document.createElement("form");
    let staticOurTitle = document.createElement("h2");
    staticOurTitle.innerHTML = "staticOurFood"
    staticOurFood.append(staticOurTitle)

    staticOurFood.setAttribute("id", "staticOurFood")
    let response = await fetch(BASE_URL + '644bf6d576130db63bdf9685');
    let data = await response.json();
    let allArray = data.resource;
    allArray.map(item => {
        // submit
        let buttonUpdate = document.createElement("button");
        buttonUpdate.setAttribute("id", "update");
        buttonUpdate.setAttribute("type", "submit");
        buttonUpdate.innerHTML = "Update"
        // lable and input
        let titleLable = document.createElement("label");
        let textTitleArea = document.createElement("textarea");
        // lable and input wrapper
        let title = document.createElement("div");
        // lable textContexnt
        titleLable.innerHTML = "title"
        // set atribute for lable and input
        titleLable.setAttribute("for", "title");
        titleLable.setAttribute("class", "title");
        textTitleArea.setAttribute("type", "text");
        textTitleArea.setAttribute("id", "title");
        // backend title value
        textTitleArea.value = item.title;
        // append lable and input  to wrapper
        title.append(titleLable)
        title.append(textTitleArea);
        // wrapper append to adminSection1
        staticOurFood.append(title);

        // description 
        item.description.map((txt, index) => {
            let textDescArea = document.createElement("textarea");
            let textDescTitle = document.createElement("h4");
            textDescTitle.innerHTML = "Descriptions " + index;
            let br = document.createElement("br");
            textDescArea.value = txt,
                staticOurFood.append(textDescTitle, textDescArea, br)
        })
        // video CRUD
        let videoLink = document.createElement("textarea");
        videoLink.value = item.videoLink
        staticOurFood.append(videoLink)
        // update btn added last becouse for update
        staticOurFood.append(buttonUpdate)
    })
    wrapper.append(staticOurFood);
    staticOurFood.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        let texts = document.querySelectorAll("textarea");

        const response = await fetch("http://localhost:5000/api/resources/644bfbaefa1861b2927cd05c", {
            method: 'put',
            headers: {
                token: localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: texts[0].value ? texts[0].value : "",
                description: [texts[1].value, texts[2].value] ? [texts[1].value, texts[2].value] : "",
                space: null || ["taom 1", "taom 2"],
                videoLink: texts[3].value ? texts[3].value : "https://www.youtube.com/watch?v=GlrxcuEDyF8"
            })
        });
        const data = await response.json();
        data ? alert("success") : "error";
    })
}
section1()