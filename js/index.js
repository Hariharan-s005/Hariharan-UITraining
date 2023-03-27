/*jQuery code*/

(async function () {
  const videoResponse = await fetch(
    "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0"
  );
  const videoJsonData = await videoResponse.json();
  console.log(videoJsonData);

  const posterResponse = await fetch(
    "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346"
  );
  const posterJsonData = await posterResponse.json();
  console.log(posterJsonData);

  let video = $("<video>");
  video.attr("src", videoJsonData.videoUrl);
  video.attr("controls", true);
  video.attr(
    "poster",
    "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg"
  );
  $(".sintel").append(video);

  let movieDetailsDiv = $("<div>");
  movieDetailsDiv.attr("class", "movie-details");
  $(".sintel").append(movieDetailsDiv);

  let movieTitle = $("<p>");
  movieTitle.attr("class", "movie-title");
  movieTitle.html(videoJsonData.title);
  $(".movie-details").append(movieTitle);

  let movieDesc = $("<p>");
  movieDesc.attr("class", "movie-description");
  movieDesc.html(videoJsonData.description);
  $(".movie-details").append(movieDesc);

  let commentsSeperator = $("<div>");
  commentsSeperator.attr("class", "comments-seperator");
  $(".sintel").append(commentsSeperator);

  let reviewerComments = $("<div>");
  reviewerComments.attr("class", "reviewer-comments");
  $(".sintel").append(reviewerComments);

  let commentsTitle = $("<h3>");
  commentsTitle.html("Comments");
  reviewerComments.append(commentsTitle);

  for (let comments of videoJsonData.comments) {
    let reviewer = $("<div>");
    reviewer.attr("class", "reviewer");
    reviewerComments.append(reviewer);

    let reviewerPicture = $("<img>");
    reviewerPicture.attr("src", comments.image);
    reviewerPicture.attr("alt", "Image of " + comments.name);
    reviewer.append(reviewerPicture);

    let reviewerDetails = $("<div>");
    reviewerDetails.attr("class", "reviewer-details");
    reviewer.append(reviewerDetails);

    let reviewerName = $("<h5>");
    reviewerName.attr("class", "reviewer-name");
    reviewerName.html(comments.name);
    reviewerDetails.append(reviewerName);

    let review = $("<p>");
    review.attr("class", "review");
    review.html(comments.comment);
    reviewerDetails.append(review);
  }

  let upcomingProjectsHeading = $("<h3>");
  upcomingProjectsHeading.html("Upcoming Projects");
  $(".upcoming-projects").append(upcomingProjectsHeading);

  let upcomingProjectsPosters = $("<div>");
  upcomingProjectsPosters.attr("class", "upcoming-projects-posters");
  $(".upcoming-projects").append(upcomingProjectsPosters);

  for (let poster of posterJsonData) {
    let posterImage = $("<img>");
    posterImage.attr("src", poster.imageUrl);
    posterImage.attr("alt", poster.title);
    upcomingProjectsPosters.append(posterImage);
  }
})();
