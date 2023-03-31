/*Importing json files */
import videoJsonContents from "/js/video.json" assert { type: "json" };
import posterJsonContents from "/js/posters.json" assert { type: "json" };

  // creating document fragment for reviewContainer
let reviewContainerDocumentFragment = document.createDocumentFragment();
let upcomingProjectsContainer = document.getElementById(
  "upcomingProjectsContainer"
);
//function for apending reviewerContainer elements
let appendReviewerContainer = () => {
  for (let comments of videoJsonContents.comments) {
    //creating html elements with the class name specified
    let reviewerContainer = document.createElement("div");
    reviewerContainer.className = "reviewer";

    // appending elements to the container
    let reviewerImage = document.createElement("img");
    reviewerImage.src = comments.image;
    reviewerImage.alt = comments.name;
    reviewerContainer.append(reviewerImage);

    let reviewerDetails = document.createElement("div");
    reviewerDetails.className = "reviewer-details";
    reviewerContainer.append(reviewerDetails);

    let reviewerName = document.createElement("h5");
    reviewerName.className = "reviewer-name";
    reviewerName.innerHTML = comments.name;
    reviewerDetails.append(reviewerName);

    let review = document.createElement("p");
    review.className = "review";
    review.innerHTML = comments.comment;
    reviewerDetails.append(review);
    reviewContainerDocumentFragment.append(reviewerContainer);
  }
};
  //function for appending upcoming projects
let appendUpcomingprojects = () => {
  let upcomingProjectsTitle = document.createElement("h3");
  upcomingProjectsTitle.innerHTML = "Upcoming Projects";
  upcomingProjectsContainer.append(upcomingProjectsTitle);

  let upcomingProjectsPosters = document.createElement("div");
  upcomingProjectsPosters.className = "upcoming-projects-posters";

  let posterImageDocumentFragment = document.createDocumentFragment();
  for (let poster of posterJsonContents) {
    let posterPicture = document.createElement("img");
    posterPicture.alt = poster.title;
    posterPicture.src = poster.imageUrl;
    posterImageDocumentFragment.append(posterPicture);
  }
  // Appending to upcomingProjectsContainer
  upcomingProjectsPosters.append(posterImageDocumentFragment);
  upcomingProjectsContainer.append(upcomingProjectsPosters);
};
document.addEventListener("DOMContentLoaded", () => {
  let leftSectionContainer = document.getElementById("leftSectionContainer");

  //creating html elements with the class name specified
  let videoContainer = document.createElement("div");
  videoContainer.className = "videoContainer";
  let video = document.createElement("video");
  video.id = "video";
  video.src = videoJsonContents.videoUrl;
  video.poster = videoJsonContents.poster;
  videoContainer.append(video);

  let playIcon = document.createElement("img");
  playIcon.className = "play-icon";
  playIcon.src = "/img/play-icon.png";
  videoContainer.append(playIcon);

  leftSectionContainer.append(videoContainer);

  let movieDetails = document.createElement("div");
  movieDetails.className = "movie-details";
  leftSectionContainer.append(movieDetails);

  let movieTitle = document.createElement("span");
  movieTitle.className = "movie-title";
  movieTitle.innerHTML = videoJsonContents.title;
  movieDetails.append(movieTitle);

  let movieDescription = document.createElement("p");
  movieDescription.className = "movie-description";
  movieDescription.innerHTML = videoJsonContents.description;
  movieDetails.append(movieDescription);

  let commentsSeperator = document.createElement("div");
  commentsSeperator.className = "comments-seperator";
  leftSectionContainer.append(commentsSeperator);

  let reviewerCommentsContainer = document.createElement("div");
  reviewerCommentsContainer.className = "reviewer-comments";
  leftSectionContainer.append(reviewerCommentsContainer);

  let movieCommentsHeading = document.createElement("h3");
  movieCommentsHeading.className = "comments";
  movieCommentsHeading.innerHTML = "Comments";
  reviewerCommentsContainer.append(movieCommentsHeading);

  // Set play button to the video
  document
    .getElementsByClassName("play-icon")[0]
    .addEventListener("click", function () {
      document.getElementById("video").play();
      document.getElementById("video").setAttribute("controls", "");
      let playIcon = document.getElementsByClassName("play-icon")[0];
      playIcon.style.display = "none";
    });

  appendReviewerContainer();

  //Appending the document fragment to reviwerCommentsContainer
  reviewerCommentsContainer.append(reviewContainerDocumentFragment);

  appendUpcomingprojects();
});
