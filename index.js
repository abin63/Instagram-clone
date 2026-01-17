import { posts } from "./data.js";

const feed = document.querySelector(".feed");

posts.forEach((post) => {
    const postEl = document.createElement("section");
    postEl.classList.add("post");

    postEl.innerHTML = `
        <div class="user-info">
            <img class="avatar" src="${post.avatar}" alt="profile picture">
            <div class="user">
                <h3 class="name">${post.name}</h3>
                <p class="place">${post.location}</p>
            </div>
        </div>

        <img class="post-img" src="${post.post}" alt="post image">

        <div class="post-body">
            <div class="icon-list">
                <img class="like-btn" src="images/icon-heart.png" alt="like">
                <img src="images/icon-comment.png" alt="comment">
                <img src="images/icon-dm.png" alt="dm">
            </div>

            <h3 class="likes">${post.likes} likes</h3>
            <p class="comment"><strong>${post.username}</strong> ${post.comment}</p>
        </div>
    `;

    feed.appendChild(postEl);

    // Select elements
    const likeBtn = postEl.querySelector(".like-btn");
    const likesEl = postEl.querySelector(".likes");
    const postImg = postEl.querySelector(".post-img");

    let liked = false; // Track like state

    function likePost() {
        if (!liked) {
            post.likes++;
            likeBtn.style.filter = "invert(18%) sepia(93%) saturate(7492%) hue-rotate(357deg)";
            liked = true;
        } else {
            post.likes--;
            likeBtn.style.filter = "invert(0%)";
            liked = false;
        }
        likesEl.textContent = `${post.likes} likes`;
    }

    // Click heart
    likeBtn.addEventListener("click", likePost);

    // Double-click image
    postImg.addEventListener("dblclick", () => {
            likePost();
            // animate heart scale
            likeBtn.style.transform = "scale(1.5)";
            setTimeout(() => likeBtn.style.transform = "scale(1)", 200);
    });
});
