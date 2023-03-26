/*Importing json files */
import videoJsonContent from "/js/video.json" assert { type: "json" };
import posterJsonContent from "/js/posters.json" assert { type: "json" };

let leftSectionContainer = document.getElementById("leftSectionContainer");
let upcomingProjectsContainer = document.getElementById(
  "upcomingProjectsContainer"
);

(function () {
  let video = document.createElement("video");
  video.src = videoJsonContent.videoUrl;
  video.poster = videoJsonContent.poster;
  leftSectionContainer.append(video);
  video.controls = true;

  let movieDetails = document.createElement("div");
  movieDetails.className = "movie-details";
  leftSectionContainer.append(movieDetails);

  let movieTitle = document.createElement("p");
  movieTitle.className = "movie-title";
  movieTitle.innerHTML = videoJsonContent.title;
  movieDetails.appendChild(movieTitle);

  let movieDescription = document.createElement("p");
  movieDescription.className = "movie-description";
  movieDescription.innerHTML = videoJsonContent.description;
  movieDetails.appendChild(movieDescription);

  let commentsSeperator = document.createElement("div");
  commentsSeperator.className = "comments-seperator";
  leftSectionContainer.appendChild(commentsSeperator);

  let reviewerCommentsContainer = document.createElement("div");
  reviewerCommentsContainer.className = "reviewer-comments";
  leftSectionContainer.appendChild(reviewerCommentsContainer);

  let movieCommentsHeading = document.createElement("h3");
  movieCommentsHeading.innerHTML = "Comments";
  reviewerCommentsContainer.appendChild(movieCommentsHeading);

  let reviewContainerDocumentFragment = document.createDocumentFragment();

  for (let comments of videoJsonContent.comments) {
    console.log(comments.image);
    let reviewerContainer = document.createElement("div");
    reviewerContainer.className = "reviewer";

    let reviewerImage = document.createElement("img");
    reviewerImage.src = comments.image;
    reviewerImage.alt = comments.name;
    reviewerContainer.appendChild(reviewerImage);

    let reviewerDetails = document.createElement("div");
    reviewerDetails.className = "reviewer-details";
    reviewerContainer.appendChild(reviewerDetails);

    let reviewerName = document.createElement("h5");
    reviewerName.className = "reviewer-name";
    reviewerName.innerHTML = comments.name;
    reviewerDetails.appendChild(reviewerName);

    let review = document.createElement("p");
    review.className = "review";
    review.innerHTML = comments.comment;
    reviewerDetails.appendChild(review);
    reviewContainerDocumentFragment.appendChild(reviewerContainer);
  }

  reviewerCommentsContainer.appendChild(reviewContainerDocumentFragment);

  let upcomingProjectsTitle = document.createElement("h3");
  upcomingProjectsTitle.innerHTML = "Upcoming Projects";
  upcomingProjectsContainer.appendChild(upcomingProjectsTitle);

  let upcomingMoviesPosters = document.createElement("div");
  upcomingMoviesPosters.className = "upcoming-projects-posters";

  let posterImageDocumentFragment = document.createDocumentFragment();
  for (let poster of posterJsonContent) {
    let posterPicture = document.createElement("img");
    posterPicture.alt = poster.title;
    posterPicture.src = poster.imageUrl;
    posterImageDocumentFragment.appendChild(posterPicture);
  }
  upcomingMoviesPosters.appendChild(posterImageDocumentFragment);
  upcomingProjectsContainer.appendChild(upcomingMoviesPosters);
})();
